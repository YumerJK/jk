const contact = {
  phone: "+90 555 123 45 67",
  whatsapp: "https://wa.me/905551234567",
  instagram: "https://instagram.com/ustakapi.mobilya",
  location: "İstanbul, Türkiye",
  maps: "https://maps.google.com/?q=Istanbul%20Turkey",
};

const services = [
  ["Özel Kapılar", "Custom Doors", "Giriş kapısı, iç kapı, lake ve ahşap kapılarda özel ölçü üretim."],
  ["Mutfak Dolapları", "Kitchen Cabinets", "Modern, kullanışlı, dayanıklı ve mekâna özel mutfak çözümleri."],
  ["Mobilya & Dolap", "Furniture & Cabinets", "Gardırop, vestiyer, TV ünitesi, banyo dolabı ve iş yeri mobilyası."],
];

const gallery = ["Mat lake mutfak", "Doğal ahşap kapı", "Gömme gardırop", "TV ünitesi"];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Usta Kapı Mobilya ana sayfa"><span>UK</span><b>Usta Kapı</b></a>
          <div className="navLinks"><a href="#services">Hizmetler</a><a href="#portfolio">Portföy</a><a href="#contact">İletişim</a></div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy revealUp">
            <p className="eyebrow">Premium marangozluk • TR / EN</p>
            <h1>Kapı, mutfak ve mobilyada modern usta işi.</h1>
            <p className="lead">Eviniz veya iş yeriniz için ölçüye özel kapılar, mutfak dolapları, gardıroplar ve ahşap mobilyalar tasarlayıp üretiyoruz.</p>
            <p className="lead english">Modern custom doors, kitchens, wardrobes, and furniture crafted with clean design and precise installation.</p>
            <div className="actions"><a className="primary" href={contact.whatsapp}>WhatsApp’tan teklif al</a><a className="secondary" href="#portfolio">İşleri incele</a></div>
            <div className="trust"><span>Ücretsiz keşif</span><span>3D tasarım desteği</span><span>Temiz montaj</span></div>
          </div>

          <div className="visual" aria-label="Modern kapı ve mobilya görsel alanı">
            <div className="glassCard mainPiece"><span>Özel Ölçü Kapı</span></div>
            <div className="glassCard sidePiece"><span>Mutfak Dolabı</span></div>
            <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Company highlights">
        <div><strong>15+</strong><span>Yıl Tecrübe</span><small>Years Experience</small></div>
        <div><strong>300+</strong><span>Tamamlanan Proje</span><small>Completed Projects</small></div>
        <div><strong>7/24</strong><span>Hızlı İletişim</span><small>Fast Contact</small></div>
      </section>

      <section className="section" id="services">
        <div className="sectionHead"><p className="eyebrow">Hizmetler / Services</p><h2>İhtiyacınıza göre tasarlanan net, şık ve dayanıklı çözümler.</h2></div>
        <div className="serviceGrid">
          {services.map(([tr, en, text], index) => <article className="serviceCard" key={tr}><span>0{index + 1}</span><h3>{tr}</h3><h4>{en}</h4><p>{text}</p></article>)}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="sectionHead"><p className="eyebrow">Portföy / Portfolio</p><h2>Ahşap dokusu, modern çizgiler ve kullanışlı detaylar.</h2></div>
        <div className="gallery">
          {gallery.map((item, index) => <div className={`galleryItem item${index + 1}`} key={item}><span>{item}</span></div>)}
        </div>
      </section>

      <section className="process" id="work">
        {['Keşif ve ölçü', 'Tasarım ve renk', 'Üretim', 'Montaj ve teslim'].map((step) => <div className="processStep" key={step}>{step}</div>)}
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow">İletişim / Contact</p><h2>Projenizi konuşalım.</h2><p>WhatsApp, Instagram, telefon veya konum üzerinden hemen ulaşabilirsiniz.</p></div>
        <div className="contactCards">
          <a href={contact.whatsapp}>WhatsApp <strong>{contact.phone}</strong></a>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>Telefon <strong>{contact.phone}</strong></a>
          <a href={contact.instagram}>Instagram <strong>@ustakapi.mobilya</strong></a>
          <a href={contact.maps}>Konum <strong>{contact.location}</strong></a>
        </div>
      </section>
      <a className="stickyWhatsApp" href={contact.whatsapp}>WhatsApp</a>
    </main>
  );
}
