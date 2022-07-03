import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from 'rebass'
import TwitterIcon from 'components/Icons/TwitterIcon'
import { Telegram } from 'components/Icons'
import useTheme from 'hooks/useTheme'
import Medium from 'components/Icons/Medium'
import { ExternalLink } from 'theme'
import { Trans, t } from '@lingui/macro'

import { useIsDarkMode } from 'state/user/hooks'

import InfoHelper from 'components/InfoHelper'
import { useMedia } from 'react-use'


const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.buttonGray + '33'};
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-bottom: 4rem;
  `};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  width: 100%;
  padding: 16px;
  flex-direction: column-reverse;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 16px 16px;
  }

  @media only screen and (min-width: 1000px) {
    padding: 16px 32px;
  }

  @media only screen and (min-width: 1366px) {
    padding: 16px 215px;
  }

  @media only screen and (min-width: 1500px) {
    padding: 16px 252px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: ${({ theme }) => theme.subText + '33'};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 16px;
    gap: 24px;
  `};
`

const Separator = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.border};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none
  `}
`

const Item = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.subText};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    gap: 12px;
  `};
`

export const FooterSocialLink = () => {
  const theme = useTheme()
  return (
    <Flex alignItems="center" justifyContent="center" sx={{ gap: '24px' }}>
      <ExternalLink href="https://t.me/lillionorg">
        <Telegram size={16} color={theme.subText} />
      </ExternalLink>
      <ExternalLink href={`https://twitter.com/lillionorg/`}>
        <TwitterIcon color={theme.subText} />
      </ExternalLink>
      <ExternalLink href={`https://lillion.medium.com/`}>
        <Medium />
      </ExternalLink>
    </Flex>
  )
}

function Footer() {
  const isDarkMode = useIsDarkMode()
  const theme = useTheme()
  const above768 = useMedia('(min-width: 768px)')
  return (
    <FooterWrapper>
      <FooterContent>
        <InfoWrapper>
          <Item>
            <Text marginRight="6px">
              <Trans>Powered By</Trans>
              {!above768 && <InfoHelper size={14} text={t`Binance Blockchain`} placement="top" />}
            </Text>
            <ExternalLink href="https://www.binance.org" style={{ display: 'flex' }}>
              <img
                src={!isDarkMode ? 'https://lillion.org/53.png' : require('../../assets/svg/52.png')}
                alt=""
                width="98px"
              />
            </ExternalLink>
            {above768 && <InfoHelper size={14} text={t`Binance Blockchain`} placement="top" />}
          </Item>
          <Separator />

          <Item>
            <Text marginRight="6px" display="flex">
              <Trans>Powered By</Trans>
              {!above768 && <InfoHelper size={14} text={t`Playgon Blockchain`} placement="top" />}
            </Text>
            <ExternalLink href="https://polygon.technology/" style={{ display: 'flex' }}>
              <img
                src={!isDarkMode ? 'https://lillion.org/55.png' : require('../../assets/svg/54.png')}
                alt=""
                width="98px"
              />
            </ExternalLink>
            {above768 && <InfoHelper size={14} text={t`Playgon Blockchain`} placement="top" />}
          </Item>
          <Separator />
          <Item>
            <Text marginRight="6px" display="flex">
              <Trans>Powered By</Trans>
              {!above768 && <InfoHelper size={14} text={t`Avalanche Blockchain`} placement="top" />}
            </Text>

            <ExternalLink href="https://www.avax.network/" style={{ display: 'flex' }}>
              <img
                src={!isDarkMode ? 'https://lillion.org/57.png' : require('../../assets/svg/56.png')}
                alt=""
                width="98px"
              />
            </ExternalLink>
            {above768 && <InfoHelper size={14} text={t`Avalanche Blockchain`} placement="top" />}
          </Item>
        
        </InfoWrapper>
        <FooterSocialLink />
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
