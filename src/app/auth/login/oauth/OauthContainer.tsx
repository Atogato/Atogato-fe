export default function OauthContainer({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <div className="relative flex w-5/12 flex-col gap-4"> {children} </div>
}
