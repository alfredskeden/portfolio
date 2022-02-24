export default function AsLink({children, href}: {children: string, href: string}) {
  return <a href={href} target="_blank">{children}</a>
}