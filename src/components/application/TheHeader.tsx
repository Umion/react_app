import viteLogo from "/vite.svg";

export function TheHeader() {
  return (
    <nav>
      <div className="container">
        <div className="header">
          <img
            src={viteLogo}
            className="logo react"
            alt="React logo"
            style={{ marginRight: "10px" }}
          />
          <span style={{ fontWeight: 600 }}>myCompany</span>
        </div>
      </div>
    </nav>
  );
}
