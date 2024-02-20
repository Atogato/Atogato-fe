import LoginContainer from './LoginContainer'
import LinkButton from './oauth/LinkButton'
import OauthContainer from './oauth/OauthContainer'
import Google from '@/icons/google.svg'
import Naver from '@/icons/naver.svg'
import Kakao from '@/icons/kakao.svg'

const OAUTH_LIST = ['kakao', 'naver', 'google'] as const

const OauthIcon = <T extends (typeof OAUTH_LIST)[number]>({ socialType }: { socialType: T[number] }) => {
  switch (socialType) {
    case 'google':
      return <Google />
    case 'naver':
      return <Naver />
    case 'kakao':
      return <Kakao />
  }
  return <></>
}

const OAUTH_MAP = {
  google: '구글',
  naver: '네이버',
  kakao: '카카오',
}

export default function LoginPage() {
  return (
    <LoginContainer>
      <h1 className="text-4xl"> 로그인 </h1>
      <OauthContainer>
        {OAUTH_LIST.map((socialType, idx) => {
          return (
            <LinkButton key={`${socialType}-${idx}`} socialType={socialType}>
              <div className="flex items-center gap-4 border border-[#EBEBEB] p-6">
                <OauthIcon socialType={socialType} />
                <p className="font-bold"> {`${OAUTH_MAP[socialType]}로 로그인하기`} </p>
              </div>
            </LinkButton>
          )
        })}
      </OauthContainer>
    </LoginContainer>
  )
}
