import HeaderComponent from './header'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <header>
            <HeaderComponent />
        </header>
        {children}
        <footer>

        </footer>
      </body>
    </html>
  );
}