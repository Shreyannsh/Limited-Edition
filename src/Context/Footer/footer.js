import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-connect">
          <header>
            <b>Connect</b>
          </header>
          <p className="connect">Instagram</p>
          <p className="connect">Facebook</p>
          <p className="connect">Twitter</p>
        </div>
        <div className="footer-address">
          <header>
            <b>Adrress</b>
          </header>
          <p>Limited Edition,L143, Okhla- phase III, New Delhi 110046</p>
        </div>
        <div className="footer-contact">
          <header>
            <b>Contact</b>
          </header>
          <p>011-3333-4444-88</p>
          <p>011-9999-555-111</p>
          <p>limitedEditon@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
