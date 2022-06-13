import React, { useEffect, useState } from 'react'
import { Text } from 'rebass'
import { Clock } from 'react-feather'
import Search from 'components/Search'
import { t, Trans } from '@lingui/macro'
import getShortenAddress from 'utils/getShortenAddress'
import { formatNumberWithPrecisionRange } from 'utils'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import useTheme from 'hooks/useTheme'
import { useMedia, useSize } from 'react-use'
import Gold from 'assets/svg/gold_icon.svg'
import Silver from 'assets/svg/silver_icon.svg'
import Bronze from 'assets/svg/bronze_icon.svg'
import Pagination from 'components/Pagination'
import { CAMPAIGN_ITEM_PER_PAGE, SWR_KEYS } from 'constants/index'
import { useSelector } from 'react-redux'
import { AppState } from 'state'
import { getFormattedTimeFromSecond } from 'utils/formatTime'
import { useSWRConfig } from 'swr'
import useInterval from 'hooks/useInterval'

/*
const LEADERBOARD_SAMPLE: LeaderboardItem[] = [
  {
    rank: 1,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 2,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 3,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 4,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 5,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 6,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 7,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 8,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 9,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 10,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
  {
    rank: 11,
    address: '0x16368dD7e94f177B8C2c028Ef42289113D328121',
    point: 3000000,
    rewardAmount: 4000,
    rewardTokenSymbol: 'KNC',
  },
]
*/

export default function LeaderboardLayout() {
  const above1200 = useMedia('(min-width: 1200px)')
  const theme = useTheme()
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rank, { width: rankWidth }] = useSize(() => (
    <span>
      <Trans>Rank</Trans>
    </span>
  ))

  const showRewards = true

  const selectedCampaignLeaderboard = useSelector((state: AppState) => state.campaigns.selectedCampaignLeaderboard)
  const searchedLeaderboard = selectedCampaignLeaderboard
    ? selectedCampaignLeaderboard.ranking.filter(item =>
        item.address.toLowerCase().includes(searchValue.toLowerCase().trim()),
      )
    : []

  const MINUTE_TO_REFRESH = 5
  const [refreshIn, setRefreshIn] = useState(MINUTE_TO_REFRESH * 60)
  const refreshInMinute = Math.floor(refreshIn / 60)
  const refreshInSecond = refreshIn - refreshInMinute * 60
  const selectedCampaign = useSelector((state: AppState) => state.campaigns.selectedCampaign)
  const { mutate } = useSWRConfig()

  useInterval(
    () => {
      setRefreshIn(prev => {
        if (prev === 0) {
          if (selectedCampaign) {
          }
          return MINUTE_TO_REFRESH * 60
        }
        return prev - 1
      })
    },
    1000,
    true,
  )

  useEffect(() => {
    if (refreshIn === 0 && selectedCampaign) mutate(SWR_KEYS.getLeaderboard(selectedCampaign.id))
  }, [refreshIn, selectedCampaign])

  return (
    <LeaderboardContainer>
      <RefreshTextAndSearchContainer>
        <RefreshTextContainer>
          <RefreshText>
            <Trans>Leaderboard refresh in</Trans>
          </RefreshText>
          <CountdownContainer>
            <Clock size={12} />
            <Text fontSize="12px" lineHeight="14px">
              {refreshInMinute.toString().length === 1 ? '0' + refreshInMinute : refreshInMinute} :{' '}
              {refreshInSecond.toString().length === 1 ? '0' + refreshInSecond : refreshInSecond}
            </Text>
          </CountdownContainer>
        </RefreshTextContainer>
        <Search
          placeholder={t`Search by address`}
          searchValue={searchValue}
          onSearch={setSearchValue}
          style={{ background: theme.buttonBlack }}
        />
      </RefreshTextAndSearchContainer>
      <LeaderboardTable>
        <LeaderboardTableHeader showRewards={showRewards}>
          <LeaderboardTableHeaderItem>{rank}</LeaderboardTableHeaderItem>
          <LeaderboardTableHeaderItem>
            <Trans>Wallet</Trans>
          </LeaderboardTableHeaderItem>
          <LeaderboardTableHeaderItem align="right">
            <Trans>Points</Trans>
          </LeaderboardTableHeaderItem>
          {showRewards && (
            <LeaderboardTableHeaderItem align="right">
              <Trans>Rewards</Trans>
            </LeaderboardTableHeaderItem>
          )}
        </LeaderboardTableHeader>
        {searchedLeaderboard
          .slice((currentPage - 1) * CAMPAIGN_ITEM_PER_PAGE, currentPage * CAMPAIGN_ITEM_PER_PAGE)
          .map((data, index) => (
            <LeaderboardTableBody
              key={index}
              showRewards={showRewards}
              style={{
                background:
                  data.rank === 1
                    ? 'linear-gradient(90deg, rgba(255, 204, 102, 0.25) 0%, rgba(255, 204, 102, 0) 54.69%, rgba(255, 204, 102, 0) 100%)'
                    : data.rank === 2
                    ? 'linear-gradient(90deg, rgba(224, 224, 224, 0.25) 0%, rgba(224, 224, 224, 0) 54.69%, rgba(224, 224, 224, 0) 100%)'
                    : data.rank === 3
                    ? 'linear-gradient(90deg, rgba(255, 152, 56, 0.25) 0%, rgba(255, 152, 56, 0) 54.69%, rgba(255, 152, 56, 0) 100%)'
                    : 'transparent',
                padding: data.rank <= 3 ? '16px 20px' : '20px',
              }}
            >
              <LeaderboardTableBodyItem
                align="center"
                style={{ width: (rankWidth === Infinity ? 33 : rankWidth) + 'px', maxHeight: '24px' }}
              >
                {data.rank === 1 ? (
                  <img src={Gold} style={{ minWidth: '18px' }} alt="" />
                ) : data.rank === 2 ? (
                  <img src={Silver} style={{ minWidth: '18px' }} alt="" />
                ) : data.rank === 3 ? (
                  <img src={Bronze} style={{ minWidth: '18px' }} alt="" />
                ) : data.rank !== undefined ? (
                  data.rank
                ) : null}
              </LeaderboardTableBodyItem>
              <LeaderboardTableBodyItem>{getShortenAddress(data.address, above1200)}</LeaderboardTableBodyItem>
              <LeaderboardTableBodyItem align="right">
                {formatNumberWithPrecisionRange(data.point, 0, 2)}
              </LeaderboardTableBodyItem>
              {showRewards && (
                <LeaderboardTableBodyItem align="right">
                  {data.rewardAmount} {data.token}
                </LeaderboardTableBodyItem>
              )}
            </LeaderboardTableBody>
          ))}
      </LeaderboardTable>
      <Pagination
        onPageChange={setCurrentPage}
        totalCount={searchedLeaderboard.length}
        currentPage={currentPage}
        pageSize={CAMPAIGN_ITEM_PER_PAGE}
        style={{ padding: '0' }}
      />
    </LeaderboardContainer>
  )
}

const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const RefreshTextAndSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  ${css`
    flex-direction: column;
    gap: 16px;
  `}
  `}
`

const RefreshTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const RefreshText = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.disableText};
`

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 6px;
  border-radius: 12px;
  background: ${({ theme }) => rgba(theme.disableText, 0.1)};
  color: ${({ theme }) => theme.disableText};
`

const LeaderboardTable = styled.div``

const LeaderboardTableHeader = styled.div<{ showRewards: boolean }>`
  padding: 19px 20px;
  display: grid;
  align-items: center;
  background: ${({ theme }) => theme.tableHeader};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  ${({ showRewards }) =>
    showRewards
      ? css`
          grid-template-columns: 7.5fr 52.6fr 19.9fr 19.9fr;
        `
      : css`
          grid-template-columns: 7.5fr 52.6fr 39.8fr;
        `}

  ${({ theme, showRewards }) => theme.mediaWidth.upToMedium`
    ${
      showRewards
        ? css`
            grid-template-columns: 1fr 2fr 2fr 2fr;
          `
        : css`
            grid-template-columns: 1fr 2fr 2fr 2fr;
          `
    }
    }`}
`

const LeaderboardTableHeaderItem = styled.div<{ align?: 'left' | 'right' | 'center' }>`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.subText};
  text-transform: uppercase;
  text-align: ${({ align }) => align ?? 'left'};
`

const LeaderboardTableBody = styled(LeaderboardTableHeader)`
  border-radius: 0;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

const LeaderboardTableBodyItem = styled.div<{ align?: 'left' | 'right' | 'center' }>`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-align: ${({ align }) => align ?? 'left'};

  ${({ theme }) => theme.mediaWidth.upToMedium`
  ${css`
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
  `}
  `}
`
