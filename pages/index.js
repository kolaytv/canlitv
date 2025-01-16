import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Canlı TV Makalesi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 20px;
          padding: 0;
          background-color: #f9f9f9;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        a {
          color: #007BFF;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="container">
        <h1>Canlı TV İzlemenin Avantajları</h1>
        <img src="https://tv.kolaytv.org/images/kolaytv.png" alt="Kolay TV" />
        <p>
          Günümüzde <a href="https://tv.kolaytv.org" target="_blank">canlı TV</a> izlemek, insanlar için eğlenceli ve bilgilendirici bir etkinlik haline geldi.
          Farklı kanallara kolayca erişim sağlayarak, dünya çapındaki olayları anında takip edebilirsiniz.
          Ayrıca sevdiğiniz dizileri ve programları kaçırmadan izleme şansına sahip olabilirsiniz.
        </p>
        <p>
          Canlı TV izlemek için güvenilir bir platform arıyorsanız, <a href="https://tv.kolaytv.org" target="_blank">Kolay TV</a> sizin için mükemmel bir seçenek olabilir.
        </p>
      </div>
    </div>
  );
}
