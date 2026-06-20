

export default function Layout({ children, home, about }: Record<string, React.ReactNode> ) {
    return (
        <div>
            <h1>home</h1>
            {home}
            <h1>Layout</h1>
            {children}
            <h1>about</h1>
            {about}
        </div>
    )
}