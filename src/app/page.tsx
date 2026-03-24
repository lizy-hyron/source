import Image from 'next/image'

export default function Home() {
  return (
    <main>
        {/* ヒーローセクション */}
        <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center">
          {/* 背景画像 - ぼかし効果付き */}
          <div className="absolute inset-0">
            <Image
              src="/mountain.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 backdrop-blur-none bg-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0289a0]/20 via-transparent to-[#00BFA5]/20"></div>
          </div>

          {/* コンテンツ */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              {/* グラスモーフィズム効果のカード */}
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50">
                <h1 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold mb-6 sm:mb-8 leading-tight">
                  <span className="text-gray-600">共通予約基盤</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#0289a0] via-[#00BFA5] to-[#0289a0] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    ResQ  
                  </span>
                </h1>
                <p className="text-lg sm:text-2xl text-gray-700 mb-10 sm:mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
                  クリニックの予約管理を革新する、次世代の医療予約システム
                </p>

                {/* CTAボタン */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <a
                    href="#contact"
                    className="group px-10 py-4 bg-gradient-to-r from-[#0289a0] to-[#00BFA5] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#00BFA5]/40 transform hover:scale-110 transition-all duration-300 text-lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      問い合わせ
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#features"
                    className="px-10 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-bold rounded-full border-2 border-gray-300 hover:border-[#0289a0] hover:bg-white hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-lg"
                  >
                    機能を見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション */}
        <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#0289a0]/10 to-[#00BFA5]/10 text-[#0289a0] rounded-full text-sm font-semibold mb-4">
                Features
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-600 mb-4">
                システムの特徴
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                医療現場のニーズに応える充実の機能
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* 特徴カード1 - 予約・患者管理 */}
              <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00BFA5]/10 transition-all duration-300 border border-gray-100 hover:border-[#00BFA5]/30 hover:-translate-y-2">
                {/* 背景画像 */}
                <div className="absolute inset-0">
                  <Image
                    src="/reservation.png"
                    alt="予約・患者管理"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90"></div>
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    予約・患者管理
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    予約管理と患者情報を一元化し、効率的な医療サービスを実現
                  </p>
                </div>
              </div>

              {/* 特徴カード2 - 院内管理 */}
              <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00BFA5]/10 transition-all duration-300 border border-gray-100 hover:border-[#00BFA5]/30 hover:-translate-y-2">
                {/* 背景画像 */}
                <div className="absolute inset-0">
                  <Image
                    src="/people.png"
                    alt="院内管理"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/60"></div>
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    院内管理
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    受付後の院内管理機能により、待合室の混雑を解消
                  </p>
                </div>
              </div>

              {/* 特徴カード3 - 待合室モニター */}
              <div className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00BFA5]/10 transition-all duration-300 border border-gray-100 hover:border-[#00BFA5]/30 hover:-translate-y-2">
                {/* 背景画像 */}
                <div className="absolute inset-0">
                  <Image
                    src="/wait.png"
                    alt="待合室モニター"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80"></div>
                </div>

                {/* コンテンツ */}
                <div className="relative z-10 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    待合室モニター
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    リアルタイムで受付状況を表示し、患者様の待ち時間を可視化
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 問い合わせセクション */}
        <section id="contact" className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#0289a0]/10 to-[#00BFA5]/10 text-[#0289a0] rounded-full text-sm font-semibold mb-4">
                Contact
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-600 mb-4">問い合わせ</h2>
            </div>
            
            {/* 問い合わせ情報 */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-clipla/5 to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#00BFA5]/30">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">お電話での問い合わせ</h4>
                <p className="text-2xl text-[#0289a0] font-bold">03-5333-6750</p>
              </div>

              <div className="group bg-gradient-to-br from-clipla/5 to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#00BFA5]/30">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">メール</h4>
                <p className="text-lg text-[#0289a0] font-semibold">xxxxxxxx@mti.co.jp</p>
              </div>

              <div className="group bg-gradient-to-br from-clipla/5 to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[#00BFA5]/30">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">営業時間</h4>
                <p className="text-lg text-gray-700 font-medium">平日 09:00-17:00</p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-600 mb-8 text-center">本社</h3>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7611195287836!2d139.68426451193173!3d35.68288352247236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f32dc241ddf9%3A0x4aabf38d2c39f1c5!2z44ix44Ko44Og44OG44Kj44O844Ki44Kk!5e0!3m2!1sja!2sjp!4v1756184928653!5m2!1sja!2sjp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ResQ本社アクセスマップ"
                  sandbox="allow-scripts allow-same-origin"
                  allow="web-share"
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-clipla/5 to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="mb-6">
                  <h4 className="flex items-center gap-3 text-xl font-bold text-gray-900">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-xl">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    住所
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-900 font-semibold text-lg">〒163-1435</p>
                  <p className="text-gray-700">東京都新宿区西新宿3-20-2</p>
                  <p className="text-gray-700">東京オペラシティタワー35F</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-clipla/5 to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="mb-6">
                  <h4 className="flex items-center gap-3 text-xl font-bold text-gray-900">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-xl">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    アクセス
                  </h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• JR新宿駅南口より徒歩10分</li>
                  <li>• 都営大江戸線都庁前駅より徒歩5分</li>
                  <li>• 京王新線初台駅より徒歩5分</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* セキュリティセクション */}
        <section className="py-16 sm:py-24 bg-gradient-to-b  from-clipla/5 to-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0289a0] to-[#00BFA5] rounded-3xl mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-600 mb-6">
              エンタープライズグレードのセキュリティ
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              強固な認証システムと、最新のセキュリティ標準に準拠した安全な医療情報管理
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white rounded-full text-base font-semibold text-gray-800 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                OAuth 2.0
              </span>
              <span className="px-6 py-3 bg-white rounded-full text-base font-semibold text-gray-800 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                暗号化通信
              </span>
              <span className="px-6 py-3 bg-white rounded-full text-base font-semibold text-gray-800 shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
                二要素認証
              </span>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0289a0] via-[#00BFA5] to-[#0289a0]"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              今すぐResQを始めましょう
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              医療現場の効率化を実現する第一歩を踏み出しませんか
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-[#0289a0] font-bold rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-300 text-lg"
            >
              お問い合わせ
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
  )
}