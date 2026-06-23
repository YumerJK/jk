const contact = {
  phone: "+90 555 123 45 67",
  whatsapp: "https://wa.me/905551234567",
  instagram: "https://instagram.com/ustakapi.mobilya",
  location: "İstanbul, Türkiye",
  maps: "https://maps.google.com/?q=Istanbul%20Turkey",
};

const services = [
  {
    tr: "Ev ve Çelik Kapılar",
    en: "Home & Security Doors",
    textTr: "Giriş kapısı, oda kapısı ve özel ölçü modern kapı üretimi.",
    textEn: "Entrance, interior, and made-to-measure modern door production.",
  },
  {
    tr: "Mutfak Mobilyaları",
    en: "Kitchen Furniture",
    textTr: "Şık, dayanıklı ve kullanışlı mutfak dolapları ve tezgah çözümleri.",
    textEn: "Stylish, durable, and practical kitchen cabinet and counter solutions.",
  },
  {
    tr: "Dolap ve Mobilya",
    en: "Cabinets & Furniture",
    textTr: "Gardırop, vestiyer, TV ünitesi ve iş yerine özel mobilyalar.",
    textEn: "Wardrobes, cloakrooms, TV units, and custom business furniture.",
  },
];

const stats = [
  ["15+", "Yıl Tecrübe", "Years Experience"],
  ["300+", "Tamamlanan İş", "Completed Projects"],
  ["100%", "Özel Ölçü", "Custom Made"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Usta Kapı Mobilya ana sayfa">
            <span>UK</span> Usta Kapı & Mobilya
          </a>
          <div className="navLinks">
            <a href="#services">Hizmetler</a>
            <a href="#work">İşlerimiz</a>
            <a href="#contact">İletişim</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy revealUp">
            <p className="eyebrow">TR / EN • Modern carpentry solutions</p>
            <h1>Kapıdan mutfağa, yaşam alanınıza özel usta işi mobilya.</h1>
            <p className="lead">
              Ev kapıları, mutfak mobilyaları, dolaplar ve özel ölçü ahşap işleri için modern, sağlam ve estetik çözümler üretiyoruz.
            </p>
            <p className="lead english">
              We craft modern custom doors, kitchen furniture, wardrobes, and fitted woodwork with clean details and reliable workmanship.
            </p>
            <div className="actions">
              <a className="primary" href={contact.whatsapp}>WhatsApp ile teklif al</a>
              <a className="secondary" href="#services">Hizmetleri gör</a>
            </div>
          </div>

          <div className="showcase" aria-label="Decorative modern furniture preview">
            <div className="card doorCard"><span>Modern Doors</span></div>
            <div className="card kitchenCard"><span>Kitchen Cabinets</span></div>
            <div className="floatingBadge">Özel Ölçü / Custom Made</div>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Company highlights">
        {stats.map(([value, tr, en]) => (
          <div className="stat" key={value}>
            <strong>{value}</strong>
            <span>{tr}</span>
            <small>{en}</small>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="sectionHead revealUp">
          <p className="eyebrow">Hizmetler / Services</p>
          <h2>Kapı, mobilya ve mutfak dolaplarında komple çözüm.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard revealUp" style={{ animationDelay: `${index * 120}ms` }} key={service.tr}>
              <div className="icon">{index + 1}</div>
              <h3>{service.tr}</h3>
              <h4>{service.en}</h4>
              <p>{service.textTr}</p>
              <p className="muted">{service.textEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="workCopy revealUp">
          <p className="eyebrow">Çalışma Şeklimiz / Our Process</p>
          <h2>Ölçü alır, tasarlar, üretir ve temiz montaj yaparız.</h2>
          <p>
            Her proje için ihtiyaca göre malzeme seçimi, renk danışmanlığı ve kullanışlı planlama sunuyoruz. İş yerleri ve evler için modern görünüm, uzun ömürlü işçilik.
          </p>
        </div>
        <div className="process">
          {['Keşif', 'Tasarım', 'Üretim', 'Montaj'].map((step) => (
            <div className="processStep" key={step}>{step}</div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">İletişim / Contact</p>
          <h2>Projeniz için hızlıca ulaşın.</h2>
          <p>WhatsApp, Instagram, telefon veya konum üzerinden iletişime geçebilirsiniz.</p>
        </div>
        <div className="contactCards">
          <a href={contact.whatsapp}>WhatsApp <strong>{contact.phone}</strong></a>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`}>Telefon <strong>{contact.phone}</strong></a>
          <a href={contact.instagram}>Instagram <strong>@ustakapi.mobilya</strong></a>
          <a href={contact.maps}>Konum <strong>{contact.location}</strong></a>
        </div>
      </section>
    </main>
  );
}
