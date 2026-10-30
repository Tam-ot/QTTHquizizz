const QUESTIONS = [
  {
    id: 1,
    topic: "KHÍA CẠNH PHÁP LÝ & NHƯỢNG QUYỀN",
    question: "Hình thức pháp lý bắt buộc đối với hợp đồng nhượng quyền thương mại theo Luật Thương mại là gì?",
    options: [
      "A. Bằng miệng",
      "B. Bằng văn bản hoặc các hình thức khác có giá trị pháp lý tương đương",
      "C. Bằng văn bản và bắt buộc phải có xác nhận trực tiếp của Bộ Công Thương",
      "D. Thỏa thuận qua hành vi thực tế mà không cần lập thành văn bản"
    ],
    correct: 1,
    explanation: "Theo quy định của Luật Thương mại Việt Nam về Nhượng quyền thương mại (Franchising), hợp đồng nhượng quyền thương mại bắt buộc phải được lập thành văn bản hoặc các hình thức khác có giá trị pháp lý tương đương (như điện báo, telex, fax, thông điệp dữ liệu) để làm căn cứ ràng buộc trách nhiệm pháp lý và chuyển giao quyền sử dụng thương hiệu giữa các bên."
  },
  {
    id: 2,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Vina Acecook là đơn vị sản xuất mì ăn liền quy mô lớn với nhiều hương vị: Mì lẩu Thái tôm, mì Lẩu Thái gà, Mì xào thập cẩm... Họ đã áp dụng mô hình kiến trúc nào?",
    options: [
      "A. Chiến lược thương hiệu hình ô (Umbrella Branding / Bao trùm)",
      "B. Chiến lược đa thương hiệu (Multi-brands)",
      "C. Chiến lược thương hiệu cá biệt (Individual Branding)",
      "D. Chiến lược thương hiệu tập thể (Collective Branding)"
    ],
    correct: 0,
    explanation: "Chiến lược thương hiệu hình ô (Umbrella Branding / Bao trùm) là việc doanh nghiệp sử dụng một tên thương hiệu chung để bảo trợ và bao trùm lên nhiều sản phẩm, dòng sản phẩm hoặc các biến thể hương vị khác nhau. Ở đây, tên gọi Vina Acecook đóng vai trò bảo chứng uy tín cho toàn bộ các dòng mì lẩu Thái, mì xào..."
  },
  {
    id: 3,
    topic: "QUẢN TRỊ DANH MỤC THƯƠNG HIỆU",
    question: "Doanh nghiệp KHÔNG nên đưa thêm một thương hiệu mới vào danh mục khi nào?",
    options: [
      "A. Khi đã có nhiều thương hiệu trong danh mục thương hiệu công ty",
      "B. Tất cả thương hiệu hiện tại đều không phù hợp với sản phẩm/dịch vụ mới",
      "C. Mặt hàng mới có thể gây ảnh hưởng tiêu cực, làm tổn hại đến định vị và uy tín của các thương hiệu hiện tại",
      "D. Thương hiệu mới dự kiến mang lại mức lợi nhuận biên thấp hơn một số thương hiệu hiện hữu"
    ],
    correct: 2,
    explanation: "Nguyên tắc cốt lõi khi quản trị danh mục thương hiệu là bảo vệ sự nhất quán và uy tín của các tài sản thương hiệu hiện có. Nếu việc tung ra thương hiệu mới hoặc mở rộng danh mục có rủi ro ăn thịt thị phần tiêu cực (cannibalization) hoặc gây tổn hại danh tiếng của thương hiệu mẹ/thương hiệu chủ lực, doanh nghiệp phải tránh đưa thêm thương hiệu đó."
  },
  {
    id: 4,
    topic: "TRUYỀN THÔNG & TÁI ĐỊNH VỊ",
    question: "Công cụ Quan hệ công chúng (PR) đặc biệt phát huy vai trò cần thiết và hiệu quả nhất khi doanh nghiệp thực hiện hoạt động nào?",
    options: [
      "A. Tái định vị lại thương hiệu (Repositioning)",
      "B. Mở rộng thêm quy mô phân phối thuần túy",
      "C. Gửi hình ảnh mẫu thử ngẫu nhiên đến khách hàng",
      "D. Triển khai các đợt giảm giá xả kho cuối năm"
    ],
    correct: 0,
    explanation: "Khi tái định vị thương hiệu, doanh nghiệp cần làm thay đổi nhận thức sâu sắc trong tâm trí khách hàng về bản sắc, giá trị hoặc phân khúc mới. PR mang tính khách quan thông qua sự bảo chứng của bên thứ ba (báo chí, chuyên gia, dư luận xã hội), giúp tạo dựng niềm tin và sự chấp nhận đối với định vị mới hiệu quả hơn nhiều so với quảng cáo tự khen."
  },
  {
    id: 5,
    topic: "HỆ THỐNG NHẬN DIỆN THƯƠNG HIỆU",
    question: "Sau khi tái định vị thương hiệu, hệ thống nhận diện thương hiệu cần phải được xử lý như thế nào?",
    options: [
      "A. Bắt buộc thay đổi toàn bộ mọi yếu tố nhận diện từ tên gọi đến màu sắc",
      "B. Giữ nguyên toàn bộ như cũ để duy trì sự quen thuộc",
      "C. Chỉ thay đổi, điều chỉnh những yếu tố không còn phù hợp với định vị thương hiệu mới",
      "D. Làm cho thật nổi bật bằng cách dùng các gam màu tương phản mạnh bất kể ý nghĩa"
    ],
    correct: 2,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 3.2.3) chỉ rõ: Làm mới và điều chỉnh hệ thống nhận diện thương hiệu cần tuân thủ nguyên tắc kế thừa và thích ứng. Doanh nghiệp chỉ điều chỉnh hoặc thay thế những yếu tố không còn tương thích với chiến lược định vị mới, tránh thay đổi thái quá làm đứt gãy liên tưởng nhận biết vốn có của khách hàng."
  },
  {
    id: 6,
    topic: "ĐỊNH VỊ THƯƠNG HIỆU",
    question: "Việc định vị thương hiệu (Brand Positioning) là hoạt động đặc biệt cần thiết và mang tính sống còn trong môi trường thị trường nào?",
    options: [
      "A. Thị trường độc quyền hoàn toàn",
      "B. Thị trường bắt đầu có sự cạnh tranh và cạnh tranh gay gắt",
      "C. Thị trường chỉ có người mua mà không có người bán",
      "D. Thị trường phi thương mại khép kín"
    ],
    correct: 1,
    explanation: "Khi thị trường độc quyền, người tiêu dùng không có sự lựa chọn nào khác nên định vị ít mang tính quyết định. Tuy nhiên, khi thị trường xuất hiện nhiều đối thủ và cạnh tranh trở nên gay gắt, định vị là bắt buộc để tạo ra sự khác biệt độc đáo (POD), giúp khách hàng nhận biết lý do vì sao nên mua thương hiệu của mình thay vì đối thủ."
  },
  {
    id: 7,
    topic: "BẢN CHẤT TÀI SẢN THƯƠNG HIỆU",
    question: "Theo quan điểm hiện đại của quản trị và tài chính, chi phí dành cho các hoạt động xây dựng và phát triển thương hiệu được hiểu là:",
    options: [
      "A. Một khoản đầu tư dài hạn nhằm kiến tạo tài sản vô hình có giá trị gia tăng",
      "B. Một khoản chi phí vận hành tiêu tốn thuần túy làm giảm lợi nhuận ngắn hạn",
      "C. Khoản ngân sách bắt buộc phải xóa bỏ ngay khi công ty gặp khó khăn",
      "D. Chi phí phát sinh bất thường không thể đo lường giá trị"
    ],
    correct: 0,
    explanation: "Quản trị thương hiệu hiện đại xem thương hiệu là tài sản vô hình quý giá nhất của doanh nghiệp. Ngân sách dành cho thương hiệu không phải là chi phí mất đi (expense) mà là một khoản đầu tư (investment) tích lũy tài sản thương hiệu (Brand Equity), mang lại dòng tiền và khả năng bán giá vượt trội (Price Premium) trong tương lai."
  },
  {
    id: 8,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Nhược điểm tiêu biểu của mô hình 'Thương hiệu được bảo trợ' (Endorsed Brand) là gì?",
    options: [
      "A. Khó chuyển tải thông điệp định vị cho từng phân khúc chuyên biệt",
      "B. Khiến khách hàng phải ghi nhớ đồng thời cả tên thương hiệu phụ lẫn tên thương hiệu chính bảo trợ",
      "C. Chi phí duy trì thương hiệu phụ hoàn toàn bằng không",
      "D. Không thể kết hợp hình ảnh giữa doanh nghiệp mẹ và sản phẩm con"
    ],
    correct: 1,
    explanation: "Trong mô hình thương hiệu bảo trợ (như Ralph Lauren by Polo, hoặc G7 của Trung Nguyên, Courtyard by Marriott), người tiêu dùng phải tiếp nhận và ghi nhớ cả hai cấp độ thương hiệu cùng lúc (thương hiệu sản phẩm và thương hiệu bảo trợ), làm gia tăng dung lượng ghi nhớ thông điệp."
  },
  {
    id: 9,
    topic: "QUẢN TRỊ DANH MỤC THƯƠNG HIỆU",
    question: "Khi xe máy Trung Quốc giá rẻ tràn vào thị trường Việt Nam, Honda tung ra Wave Alpha với mức giá thấp cạnh tranh trực tiếp. Trong danh mục thương hiệu, Wave Alpha đóng vai trò là:",
    options: [
      "A. Thương hiệu chiến lược cao cấp (Strategic Brand)",
      "B. Thương hiệu che chắn / Lính bảo vệ (Flanker / Fighting Brand)",
      "C. Thương hiệu khai thác / Bò sữa (Cash Cow)",
      "D. Thương hiệu hình ảnh / Đầu tàu (Silver Bullet)"
    ],
    correct: 1,
    explanation: "Thương hiệu che chắn (Flanker/Fighting brand) là thương hiệu được đưa ra thị trường nhằm đối đầu trực diện với đối thủ cạnh tranh giá rẻ, từ đó bảo vệ thị phần và che chắn uy tín, biên lợi nhuận của các dòng sản phẩm chủ lực (như Honda Super Dream, Future) không bị ảnh hưởng tiêu cực."
  },
  {
    id: 10,
    topic: "TÀI SẢN THƯƠNG HIỆU & LIÊN TƯỞNG",
    question: "Ba nhóm liên tưởng thương hiệu (Brand Associations) cơ bản nhất trong tâm trí khách hàng bao gồm:",
    options: [
      "A. Lợi ích lý tính và lợi ích cảm tính đơn thuần",
      "B. Thuộc tính sản phẩm, lợi ích sản phẩm, và hình ảnh công ty/thương hiệu",
      "C. Bao bì sản phẩm và thái độ của nhân viên bán hàng",
      "D. Chương trình khuyến mại và thông điệp giảm giá ngắn hạn"
    ],
    correct: 1,
    explanation: "Theo lý thuyết tài sản thương hiệu của David Aaker và Keller, liên tưởng thương hiệu cấu thành từ ba trụ cột chính: (1) Các thuộc tính hữu hình và vô hình của sản phẩm; (2) Các lợi ích chức năng, tâm lý, xã hội mà sản phẩm mang lại; và (3) Uy tín, năng lực, hình ảnh của công ty/thương hiệu đứng sau sản phẩm."
  },
  {
    id: 11,
    topic: "CHIẾN LƯỢC QUẢN TRỊ THEO NGÀNH HÀNG",
    question: "Đặc trưng nổi bật nhất của hoạt động quản trị thương hiệu trong ngành hàng bánh trung thu tại Việt Nam là gì?",
    options: [
      "A. Hoàn toàn không chịu ảnh hưởng của tính mùa vụ",
      "B. Phụ thuộc rất lớn vào tính mùa vụ với chu kỳ bán lẻ cực ngắn và cường độ tiếp thị dồn dập",
      "C. Chỉ chú trọng vào tiếp thị kỹ thuật số xuyên suốt cả năm",
      "D. Nhu cầu tiêu dùng luôn phân bổ đồng đều giữa 12 tháng"
    ],
    correct: 1,
    explanation: "Bánh trung thu là ngành hàng có tính mùa vụ cực kỳ gay gắt (chỉ kéo dài khoảng 1-2 tháng trước rằm tháng Tám âm lịch). Do đó, hoạt động truyền thông, nhận diện, thiết lập quầy kệ điểm bán (BTL) và phân phối phải được kích hoạt tập trung với tốc độ cao và cường độ dồn dập."
  },
  {
    id: 12,
    topic: "HỆ THỐNG NHẬN DIỆN THƯƠNG HIỆU",
    question: "Câu khẩu hiệu kinh điển của kẹo M&M: 'Chỉ tan trong miệng, không tan trong tay' là biểu hiện của thành tố nào sau đây?",
    options: [
      "A. Nhận diện cốt lõi của thương hiệu (Core Brand Identity / POD)",
      "B. Nhận diện mở rộng thứ yếu của thương hiệu",
      "C. Nhận diện quy trình sản xuất thuần túy",
      "D. Dấu hiệu pháp lý không có giá trị truyền thông"
    ],
    correct: 0,
    explanation: "Khẩu hiệu này nêu bật chính xác đặc tính nổi trội cốt lõi (lớp vỏ kẹo cứng bọc socola giúp không dính tay), phản ánh tinh túy sản phẩm và điểm khác biệt độc đáo (POD) định hình trong tâm trí người tiêu dùng toàn cầu hàng chục năm qua."
  },
  {
    id: 13,
    topic: "HỆ THỐNG NHẬN DIỆN THƯƠNG HIỆU",
    question: "Để giữ vững sự đồng bộ và nhất quán trong toàn bộ hệ thống nhận diện thương hiệu, doanh nghiệp cần kết hợp các điều kiện nào sau đây?",
    options: [
      "A. Sự cam kết và phối hợp chặt chẽ giữa các phòng, ban chức năng",
      "B. Quyết tâm và định hướng chỉ đạo của ban lãnh đạo cao nhất",
      "C. Có bộ cẩm nang quy chuẩn hướng dẫn chi tiết (Brand Guidelines)",
      "D. Tất cả các điều kiện trên đều đúng và cần thiết"
    ],
    correct: 3,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 3.3.1) nhấn mạnh: Sự đồng bộ đòi hỏi sự chỉ đạo xuyên suốt từ ban lãnh đạo, sự cam kết tuân thủ của các phòng ban (kinh doanh, tiếp thị, nhân sự...), và bộ tài liệu quy chuẩn (Brand Guidelines/Manual) quy định chặt chẽ từ mã màu, tỷ lệ logo đến cách ứng dụng vật phẩm."
  },
  {
    id: 14,
    topic: "ĐỊNH VỊ THƯƠNG HIỆU",
    question: "Các nhà quản trị thương hiệu buộc phải tiến hành hoạt động định vị thương hiệu xuất phát từ nguyên nhân căn bản nào?",
    options: [
      "A. Sự bùng nổ quá tải của các thông điệp quảng cáo trên mọi phương tiện",
      "B. Cạnh tranh khốc liệt với quá nhiều sản phẩm bắt chước, tương tự nhau trên thị trường",
      "C. Tốc độ đổi mới và chuyển giao công nghệ sản xuất diễn ra cực kỳ nhanh chóng",
      "D. Tất cả các nguyên nhân trên đều đúng"
    ],
    correct: 3,
    explanation: "Trong môi trường bão hòa thông tin và sản phẩm tương tự nhau về mặt lý tính, định vị thương hiệu là con đường duy nhất giúp thương hiệu chiếm lĩnh một vị trí khác biệt, rõ ràng và có ý nghĩa trong tâm trí khách hàng, ngăn nguy cơ bị hòa lẫn và đào thải."
  },
  {
    id: 15,
    topic: "TÀI SẢN THƯƠNG HIỆU",
    question: "Khái niệm 'Tài sản thương hiệu' (Brand Equity) phản ánh điều gì?",
    options: [
      "A. Mức độ nhận thức trong tâm trí khách hàng",
      "B. Giá trị gia tăng về tài chính và cảm nhận mà tên thương hiệu mang lại cho sản phẩm so với sản phẩm không mang tên thương hiệu",
      "C. Vốn điều lệ đăng ký trên giấy phép kinh doanh của doanh nghiệp",
      "D. Tổng giá trị khấu hao tài sản cố định trong nhà máy"
    ],
    correct: 1,
    explanation: "Tài sản thương hiệu là tập hợp các tài sản vô hình (và các khoản nợ) gắn liền với tên và biểu trưng của thương hiệu, giúp gia tăng (hoặc làm giảm) giá trị của sản phẩm hoặc dịch vụ đối với cả doanh nghiệp và khách hàng của doanh nghiệp đó."
  },
  {
    id: 16,
    topic: "ĐỊNH GIÁ THƯƠNG HIỆU",
    question: "Hiện nay, phương pháp tiếp cận được sử dụng rộng rãi và phổ biến nhất trên thế giới để định giá thương hiệu (Brand Valuation) là gì?",
    options: [
      "A. Phương pháp ước lượng đo lường nhận thức thuần túy",
      "B. Phương pháp sử dụng sổ sách kế toán lịch sử",
      "C. Phương pháp kinh tế (kết hợp phân tích tài chính dòng tiền với vai trò tác động của marketing/khách hàng - như Interbrand)",
      "D. Phương pháp chuyên gia Delphi độc lập"
    ],
    correct: 2,
    explanation: "Phương pháp kinh tế kết hợp (tiêu biểu là mô hình Interbrand, Brand Finance) vừa tính toán dòng tiền kinh tế tương lai của doanh nghiệp, vừa đánh giá chỉ số vai trò thương hiệu (Role of Brand) và độ mạnh thương hiệu (Brand Strength) để quy đổi giá trị thương hiệu ra một con số tài chính cụ thể."
  },
  {
    id: 17,
    topic: "HỆ THỐNG PHÂN PHỐI & ĐIỂM CHẠM",
    question: "Hệ thống các cửa hàng bán lẻ thực phẩm và thịt tươi sống của Vissan trên toàn quốc được hình thành chủ yếu theo hình thức nào sau đây?",
    options: [
      "A. Nhượng quyền thương mại (Franchising)",
      "B. Chuyển giao quyền sử dụng đối tượng sở hữu công nghiệp (Licensing)",
      "C. Hệ thống phân phối bán lẻ trực tiếp do doanh nghiệp đầu tư, vận hành",
      "D. Mạng lưới đại lý ủy thác không chính thức"
    ],
    correct: 2,
    explanation: "Chuỗi cửa hàng tiện ích và giới thiệu sản phẩm của Vissan là kênh bán lẻ trực tiếp (Direct retail distribution) thuộc quyền sở hữu, quản lý và điều hành trực tiếp của công ty nhằm kiểm soát chặt chẽ chất lượng thực phẩm tươi sống đến tay người tiêu dùng."
  },
  {
    id: 18,
    topic: "BẢN CHẤT THƯƠNG HIỆU",
    question: "Khẳng định nào sau đây là ĐÚNG NHẤT khi bàn về bản chất cốt lõi của thương hiệu?",
    options: [
      "A. Thương hiệu chỉ đơn thuần là nhãn mác được dán lên bao bì sản phẩm của nhà sản xuất",
      "B. Thương hiệu không chỉ do doanh nghiệp tạo lập mà thực sự tồn tại trong nhận thức, cảm nhận và niềm tin của khách hàng",
      "C. Thương hiệu chỉ tồn tại khi doanh nghiệp đã chi tiền cho quảng cáo truyền hình",
      "D. Thương hiệu đồng nghĩa hoàn toàn với tên pháp lý trên giấy phép đăng ký kinh doanh"
    ],
    correct: 1,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 1.1.2) chỉ rõ: Thương hiệu là tập hợp các dấu hiệu để nhận biết và phân biệt, đồng thời là hình tượng về sản phẩm và doanh nghiệp trong tâm trí khách hàng và công chúng. Thương hiệu bắt nguồn từ trải nghiệm và được hoàn thiện bởi nhận thức của người tiêu dùng."
  },
  {
    id: 19,
    topic: "CHỨC NĂNG CỦA THƯƠNG HIỆU",
    question: "Chức năng tạo sự cảm nhận và tin cậy của thương hiệu đối với khách hàng được hình thành thông qua các con đường nào?",
    options: [
      "A. Khách hàng đã trực tiếp trải nghiệm, sử dụng sản phẩm/dịch vụ mang thương hiệu đó",
      "B. Khách hàng tiếp nhận thông tin truyền thông quảng bá nhất quán về thương hiệu",
      "C. Khách hàng được người thân, bạn bè, người có uy tín giới thiệu truyền miệng (WOM)",
      "D. Cả A, B và C đều đúng"
    ],
    correct: 3,
    explanation: "Niềm tin và sự cảm nhận thương hiệu được bồi đắp từ ba nguồn chính: trải nghiệm thực tế khi sử dụng sản phẩm (thuyết phục nhất), các thông điệp truyền thông từ doanh nghiệp, và sự lan tỏa xã hội qua truyền miệng, đánh giá của cộng đồng."
  },
  {
    id: 20,
    topic: "BẢN CHẤT THƯƠNG HIỆU & LỜI HỨA",
    question: "Cam kết ngầm định, không có tính ràng buộc pháp lý của doanh nghiệp về những giá trị và trải nghiệm mang lại cho khách hàng được gọi là:",
    options: [
      "A. Lời hứa thương hiệu (Brand Promise)",
      "B. Tầm nhìn thương hiệu (Brand Vision)",
      "C. Sứ mệnh thương hiệu (Brand Mission)",
      "D. Điều khoản bảo hành hợp đồng thương mại"
    ],
    correct: 0,
    explanation: "Lời hứa thương hiệu là cam kết tinh thần giữa doanh nghiệp và khách hàng về những giá trị, trải nghiệm và chất lượng ổn định mà khách hàng sẽ nhận được mỗi khi tương tác với thương hiệu, dù không phải là một hợp đồng có tính chế tài pháp lý dân sự."
  },
  {
    id: 21,
    topic: "ĐỊNH VỊ & TÍNH CÁCH THƯƠNG HIỆU",
    question: "Trong quản trị thương hiệu, việc xây dựng 'Tính cách thương hiệu' (Brand Personality) mang lại ý nghĩa cốt lõi nào?",
    options: [
      "A. Gán các nét tính cách, cảm xúc của con người cho thương hiệu để tạo sự liên tưởng sâu sắc và gắn kết cảm xúc với khách hàng",
      "B. Mọi thương hiệu bắt buộc phải có tính cách trẻ trung, sôi nổi để thu hút người trẻ",
      "C. Chỉ những doanh nghiệp bán lẻ thời trang mới cần xây dựng tính cách thương hiệu",
      "D. Thay thế hoàn toàn cho chất lượng kỹ thuật của sản phẩm"
    ],
    correct: 0,
    explanation: "Tính cách thương hiệu (theo mô hình của Jennifer Aaker gồm 5 nhóm tính cách) giúp nhân cách hóa thương hiệu, biến sản phẩm vô tri thành một người bạn có phong cách riêng, từ đó tạo dựng mối liên kết cảm xúc sâu sắc và trung thành với tập khách hàng mục tiêu."
  },
  {
    id: 22,
    topic: "QUY TRÌNH QUẢN TRỊ THƯƠNG HIỆU",
    question: "Chiến lược thương hiệu trong doanh nghiệp thường được cụ thể hóa và triển khai thông qua hình thức nào?",
    options: [
      "A. Các dự án thương hiệu cụ thể",
      "B. Các chương trình hành động theo giai đoạn",
      "C. Các chiến dịch truyền thông tích hợp",
      "D. Cả A, B và C đều đúng"
    ],
    correct: 3,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 2.2.2) chỉ rõ: Khi thực thi chiến lược thương hiệu, nhà quản trị phân bổ thành các dự án thương hiệu cụ thể (thiết kế nhận diện, truyền thông ngoài trời, sự kiện ra mắt, bảo vệ chống xâm phạm...), các chương trình và chiến dịch hành động theo tiến độ."
  },
  {
    id: 23,
    topic: "ĐỊNH VỊ THƯƠNG HIỆU",
    question: "Các nhà quản trị thương hiệu phải tiến hành định vị thương hiệu bởi vì các lý do nào sau đây?",
    options: [
      "A. Sự bùng nổ của các hoạt động quảng cáo khiến thông tin bị quá tải",
      "B. Cạnh tranh gay gắt với nhiều sản phẩm bắt chước, tương tự nhau",
      "C. Tình hình đổi mới và chuyển giao công nghệ diễn ra rất nhanh",
      "D. Cả 3 câu trên đều đúng"
    ],
    correct: 3,
    explanation: "Định vị thương hiệu là giải pháp chiến lược giúp thương hiệu tự cắt nghĩa vị trí độc đáo của mình trước sức ép từ bão hòa quảng cáo, hàng hóa cạnh tranh bắt chước nhanh chóng và công nghệ thay đổi liên tục."
  },
  {
    id: 24,
    topic: "TRUYỀN THÔNG THƯƠNG HIỆU",
    question: "Hình thức truyền thông tiếp thị 'Bán hàng cá nhân' (Personal Selling) có bản chất là:",
    options: [
      "A. Cá nhân người tiêu dùng tự rao bán hàng hóa cũ của mình",
      "B. Sự giao tiếp trực tiếp mặt-đối-mặt (face-to-face) giữa người bán và khách hàng tiềm năng nhằm mục đích giới thiệu và thuyết phục mua sản phẩm",
      "C. Bán hàng hóa với giá trị nhỏ lẻ tại vỉa hè",
      "D. Bán hàng thông qua các video quay sẵn không tương tác"
    ],
    correct: 1,
    explanation: "Bán hàng cá nhân là công cụ xúc tiến tiếp thị trực tiếp, trong đó nhân viên bán hàng tiếp xúc trực tiếp với khách hàng, tư vấn, giải đáp thắc mắc, xây dựng mối quan hệ và chốt đơn hàng."
  },
  {
    id: 25,
    topic: "KHÍA CẠNH PHÁP LÝ & SỞ HỮU TRÍ TUỆ",
    question: "Theo Luật Sở hữu trí tuệ Việt Nam, Bằng độc quyền giải pháp hữu ích có thời hạn hiệu lực là bao lâu kể từ ngày nộp đơn?",
    options: [
      "A. Trong 5 năm, sau đó có thể gia hạn 2 lần",
      "B. Trong 10 năm, sau đó có thể gia hạn nhiều lần",
      "C. Trong 10 năm và không được gia hạn",
      "D. Trong 20 năm và không được gia hạn"
    ],
    correct: 2,
    explanation: "Căn cứ Điều 93 Luật Sở hữu trí tuệ Việt Nam và Giáo trình Quản trị thương hiệu (Mục 4.1.3, trang 140): Bằng độc quyền giải pháp hữu ích có hiệu lực từ ngày cấp và kéo dài đến hết 10 năm kể từ ngày nộp đơn hợp lệ và KHÔNG ĐƯỢC GIA HẠN (khác với sáng chế là 20 năm không gia hạn, và nhãn hiệu là 10 năm được gia hạn nhiều lần)."
  },
  {
    id: 26,
    topic: "ĐẶT TÊN THƯƠNG HIỆU",
    question: "Theo nghiên cứu về đặt tên thương hiệu trong giáo trình, một cái tên thương hiệu được coi là có độ dài lý tưởng, ngắn gọn, dễ nhớ và dễ đọc thường có độ dài bao nhiêu âm tiết?",
    options: [
      "A. 1 âm tiết duy nhất",
      "B. Từ 2 đến 3 âm tiết (lý tưởng nhất là 2 âm tiết)",
      "C. Tối thiểu từ 4 âm tiết trở lên",
      "D. Càng nhiều âm tiết càng tốt để thể hiện hết ý nghĩa"
    ],
    correct: 1,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 3.2.1, trang 91) nêu rõ: Tên thương hiệu có 1 âm tiết thì rất ngắn, có từ 4 âm tiết trở lên thì dài và khó nhớ, và hợp lý, lý tưởng nhất là từ 2 đến 3 âm tiết (vừa đủ nhịp điệu phát âm, vừa dễ nhớ, dễ đăng ký bảo hộ)."
  },
  {
    id: 27,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Thương hiệu cà phê G7 đi liền với tên công ty Trung Nguyên (G7 - Trung Nguyên) đại diện cho mô hình kiến trúc thương hiệu nào?",
    options: [
      "A. Thương hiệu chính - phụ song song (hoặc Thương hiệu bảo trợ / Endorsed Branding)",
      "B. Thương hiệu độc lập hoàn toàn không liên quan",
      "C. Mô hình ngôi nhà thương hiệu thuần nhất (Branded House)",
      "D. Mô hình hợp tác liên minh đa quốc gia"
    ],
    correct: 0,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 1.3.2, trang 48-51) dẫn chứng: G7 đóng vai trò là thương hiệu chủ đạo (master brand) cho dòng cà phê hòa tan, còn Trung Nguyên đóng vai trò là thương hiệu bảo trợ/hỗ trợ uy tín (endorsed brand) song hành trên bao bì."
  },
  {
    id: 28,
    topic: "CHỈ DẪN ĐỊA LÝ & THƯƠNG HIỆU TẬP THỂ",
    question: "Khi nghe cụm từ 'Nước mắm Phú Quốc', theo quy định của pháp luật và quản trị thương hiệu, bạn biết đó là:",
    options: [
      "A. Xuất xứ hàng hóa / Chỉ dẫn địa lý gắn với chất lượng đặc thù địa phương",
      "B. Tên riêng độc quyền của một cơ sở tư nhân duy nhất",
      "C. Thương hiệu cá biệt của một tập đoàn nước ngoài",
      "D. Một nhãn hiệu thương mại thông thường có thể chuyển nhượng tùy ý"
    ],
    correct: 0,
    explanation: "Nước mắm Phú Quốc là chỉ dẫn địa lý (Geographical Indication) được bảo hộ, dùng để chỉ nguồn gốc xuất xứ và danh tiếng chất lượng đặc thù của sản phẩm nước mắm truyền thống sản xuất tại huyện đảo Phú Quốc, tỉnh Kiên Giang."
  },
  {
    id: 29,
    topic: "HỆ THỐNG NHẬN DIỆN THƯƠNG HIỆU",
    question: "Hệ thống các dấu hiệu nhận biết và phân biệt một thương hiệu trên thị trường bao gồm các thành tố nào?",
    options: [
      "A. Tên gọi, logo, khẩu hiệu (slogan), bao bì, màu sắc đặc trưng",
      "B. Phong cách phục vụ, không gian giao dịch, hình ảnh nhân viên",
      "C. Âm thanh, nhạc hiệu (audio branding), mùi hương",
      "D. Cả A, B và C đều đúng"
    ],
    correct: 3,
    explanation: "Hệ thống nhận diện thương hiệu hiện đại bao gồm cả nhận diện thị giác (tên, logo, màu sắc, bao bì), nhận diện qua hành vi phong cách nhân viên, và nhận diện đa giác quan (thính giác, khứu giác, xúc giác)."
  },
  {
    id: 30,
    topic: "TRUYỀN THÔNG THƯƠNG HIỆU",
    question: "Hoạt động Quan hệ công chúng (PR) trong quản trị thương hiệu hiện đại là quá trình thông tin và giao tiếp:",
    options: [
      "A. Một chiều áp đặt từ công ty đến khách hàng",
      "B. Một chiều thụ động từ khách hàng phản ánh đến công ty",
      "C. Hai chiều tương tác giữa công ty và các nhóm công chúng liên quan nhằm xây dựng sự thấu hiểu và tin cậy",
      "D. Thụ động chờ đợi khủng hoảng xảy ra mới bắt đầu xử lý"
    ],
    correct: 2,
    explanation: "PR hiện đại không phải là tuyên truyền một chiều mà là quá trình đối thoại hai chiều: doanh nghiệp lắng nghe phản hồi từ công chúng để hoàn thiện và chủ động truyền tải thông điệp tích cực nhằm kiến tạo mối quan hệ bền vững."
  },
  {
    id: 31,
    topic: "THÁP NHẬN BIẾT THƯƠNG HIỆU",
    question: "Thứ tự các cấp bậc trong mô hình tháp nhận biết thương hiệu (Brand Awareness Pyramid) từ thấp đến cao là gì?",
    options: [
      "A. Không nhận biết -> Nhớ đến thương hiệu -> Nhận ra thương hiệu -> Nhớ đầu tiên (Top of Mind)",
      "B. Không nhận biết -> Nhận ra thương hiệu (Brand Recognition) -> Nhớ đến thương hiệu (Brand Recall) -> Nhớ đầu tiên (Top of Mind)",
      "C. Nhớ đến thương hiệu -> Nhận ra thương hiệu -> Không nhận biết -> Nhớ đầu tiên",
      "D. Nhớ đầu tiên -> Nhận ra thương hiệu -> Nhớ đến thương hiệu -> Không nhận biết"
    ],
    correct: 1,
    explanation: "Tháp nhận biết của David Aaker gồm 4 bậc từ thấp lên cao: 1. Hoàn toàn không nhận biết (Unaware); 2. Nhận ra thương hiệu khi có gợi ý (Aided/Recognition); 3. Nhớ đến thương hiệu khi không có gợi ý (Unaided/Recall); 4. Thương hiệu nhớ đến đầu tiên trong ngành hàng (Top of Mind)."
  },
  {
    id: 32,
    topic: "QUẢN TRỊ DANH MỤC THƯƠNG HIỆU",
    question: "Một thương hiệu do bạn quản lý đang bán rất chạy và đóng góp nguồn tiền lớn nhất cho công ty (Cash Cow). Quyết định quản trị đúng đắn nhất là gì?",
    options: [
      "A. Yêu cầu chi tiêu ngân sách quảng cáo tối đa, cao hơn tất cả các thương hiệu khác để duy trì bằng mọi giá",
      "B. Dừng ngay lập tức toàn bộ mọi hoạt động tiếp thị để cắt giảm tối đa chi phí",
      "C. Căn cứ vào vai trò chiến lược của thương hiệu trong danh mục thương hiệu chung để lên kế hoạch tiếp thị và đầu tư tối ưu nhằm duy trì dòng tiền",
      "D. Thuê ngay ca sĩ nổi tiếng nhất làm đại sứ bất chấp chi phí vượt ngân sách"
    ],
    correct: 2,
    explanation: "Với thương hiệu đóng vai trò 'Bò sữa' (Cash Cow) tạo tiền mặt, mục tiêu quản trị danh mục là duy trì dòng tiền ổn định với chi phí hợp lý để dùng nguồn tiền đó tái đầu tư cho các thương hiệu 'Ngôi sao' hoặc 'Thương hiệu chiến lược mới', không nên chi tiêu lãng phí hoặc cắt bỏ hoàn toàn."
  },
  {
    id: 33,
    topic: "VAI TRÒ CỦA THƯƠNG HIỆU",
    question: "Vai trò chủ yếu của thương hiệu đối với NGƯỜI TIÊU DÙNG bao gồm:",
    options: [
      "A. Giúp nhận biết nguồn gốc sản phẩm, giảm thiểu rủi ro mua sắm và đóng vai trò như một lời cam kết chất lượng",
      "B. Tạo lập rào cản độc quyền ngăn chặn các nhà sản xuất khác gia nhập ngành",
      "C. Giúp doanh nghiệp định giá cao mà không cần cải tiến kỹ thuật sản phẩm",
      "D. Thay thế hoàn toàn mọi dịch vụ chăm sóc khách hàng và bảo hành"
    ],
    correct: 0,
    explanation: "Đối với người tiêu dùng, thương hiệu giúp họ định vị nguồn gốc xuất xứ, rút ngắn thời gian tìm kiếm thông tin, giảm thiểu rủi ro chức năng và tài chính, đồng thời mang lại sự an tâm dựa trên lời cam kết chất lượng của doanh nghiệp."
  },
  {
    id: 34,
    topic: "ĐẶT TÊN THƯƠNG HIỆU",
    question: "Tên thương hiệu dầu gội đầu 'Clear' của Unilever được đặt dựa trên phương pháp tiếp cận nào?",
    options: [
      "A. Tên người sáng lập hoặc người phát minh",
      "B. Đặc tính và lợi ích nổi trội của sản phẩm (sạch gàu, sáng tỏ, sảng khoái)",
      "C. Tên ghép địa danh nơi nhà máy đóng chân",
      "D. Một từ ngẫu nhiên không có ý nghĩa từ điển"
    ],
    correct: 1,
    explanation: "Từ 'Clear' trong tiếng Anh có nghĩa là sạch sẽ, sáng sủa, không còn gàu bám. Đây là cách đặt tên mang tính mô tả trực tiếp công dụng và lợi ích then chốt của dầu gội trị gàu."
  },
  {
    id: 35,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Mô hình kiến trúc thương hiệu chủ đạo của tập đoàn The Coca-Cola Company đối với các dòng nước ngọt có ga (Coca-Cola Classic, Coca-Cola Light, Coca-Cola Zero) thuộc loại mô hình nào?",
    options: [
      "A. Mô hình ngôi nhà thương hiệu (Branded House / Umbrella)",
      "B. Mô hình thương hiệu độc lập hoàn toàn (House of Brands)",
      "C. Mô hình thương hiệu cá biệt rời rạc",
      "D. Mô hình phân tán không có kiến trúc"
    ],
    correct: 0,
    explanation: "Coca-Cola sử dụng tên thương hiệu chủ chốt Coca-Cola làm trung tâm bảo trợ cho các dòng sản phẩm phái sinh (Coca-Cola Zero, Light, Cherry...), đây là biểu hiện kinh điển của mô hình Ngôi nhà thương hiệu (Branded House)."
  },
  {
    id: 36,
    topic: "BẢN CHẤT THƯƠNG HIỆU",
    question: "Thương hiệu của một sản phẩm (Brand) KHÔNG thể được hiểu đơn thuần là:",
    options: [
      "A. Chỉ là một biểu tượng hình ảnh riêng lẻ",
      "B. Chỉ là nhãn hiệu thương mại đơn thuần",
      "C. Chỉ là một câu khẩu hiệu hoặc tên đăng ký văn bằng",
      "D. Cả 3 câu trên đều chưa phản ánh đầy đủ bản chất toàn diện của thương hiệu"
    ],
    correct: 3,
    explanation: "Thương hiệu là một phạm trù tổng hợp bao gồm cả phần xác (các dấu hiệu nhận diện trực giác như tên, logo, slogan) và phần hồn (các giá trị tri giác, cảm nhận, niềm tin và hình tượng trong tâm trí khách hàng)."
  },
  {
    id: 37,
    topic: "LÒNG TRUNG THÀNH THƯƠNG HIỆU",
    question: "Lòng trung thành với thương hiệu (Brand Loyalty) của khách hàng thường được đo lường và đánh giá thông qua các tiêu chí nào?",
    options: [
      "A. Tỷ lệ mua sắm lặp lại (Repurchase rate) và mức độ sẵn sàng giới thiệu cho người khác (NPS)",
      "B. Doanh thu toàn công ty trong một quý kế toán",
      "C. Số lượng người truy cập vào trang web xem khuyến mại",
      "D. Mức độ thử hàng duy nhất một lần khi có quà tặng miễn phí"
    ],
    correct: 0,
    explanation: "Lòng trung thành thương hiệu thể hiện ở hành vi mua lặp lại liên tục theo thời gian bất chấp áp lực giảm giá từ đối thủ, cũng như sự sẵn lòng bảo vệ và tiến cử thương hiệu cho cộng đồng."
  },
  {
    id: 38,
    topic: "THƯƠNG HIỆU QUỐC GIA",
    question: "Thương hiệu quốc gia (Country of Origin / National Brand) tạo ra tác động rõ nét và mạnh mẽ nhất đối với thương hiệu sản phẩm của doanh nghiệp khi nào?",
    options: [
      "A. Khi doanh nghiệp xuất khẩu sản phẩm ra thị trường nước ngoài hoặc cạnh tranh với hàng nhập khẩu",
      "B. Khi bán buôn sản phẩm về vùng sâu vùng xa nội địa",
      "C. Khi công ty thay đổi mẫu mã bao bì",
      "D. Khi công ty chuyển trụ sở văn phòng"
    ],
    correct: 0,
    explanation: "Hiệu ứng xuất xứ quốc gia (COO - Country of Origin) có ảnh hưởng quyết định khi bước ra thị trường quốc tế. Ví dụ, nhãn hiệu 'Made in Germany' bảo chứng cho độ cơ khí chính xác, 'Made in Switzerland' bảo chứng cho đồng hồ, 'Vietnam Value' bảo chứng nông sản chất lượng cao."
  },
  {
    id: 39,
    topic: "LÒNG TRUNG THÀNH THƯƠNG HIỆU",
    question: "Lợi ích chiến lược to lớn mà doanh nghiệp đạt được khi sở hữu một tệp khách hàng trung thành với thương hiệu bao gồm:",
    options: [
      "A. Giảm thiểu chi phí tiếp thị (chi phí giữ chân khách hàng cũ thấp hơn nhiều so với tìm khách hàng mới)",
      "B. Tạo đòn bẩy thương mại và sức mạnh đàm phán vượt trội đối với các kênh phân phối",
      "C. Thu hút khách hàng mới dễ dàng hơn nhờ sức mạnh truyền miệng tích cực",
      "D. Cả 3 câu trên đều đúng"
    ],
    correct: 3,
    explanation: "Lòng trung thành là tài sản cốt lõi tạo ra lợi nhuận bền vững: vừa giảm chi phí marketing, vừa giúp nhà phân phối không thể từ chối nhập hàng, vừa tự động lan tỏa thu hút khách hàng mới."
  },
  {
    id: 40,
    topic: "HỆ THỐNG NHẬN DIỆN THƯƠNG HIỆU",
    question: "Để tạo ra các yếu tố giúp khách hàng nhận biết và ghi nhớ thương hiệu, doanh nghiệp cần tập trung vào việc kiến tạo:",
    options: [
      "A. Nhận diện thương hiệu đơn lẻ",
      "B. Hệ thống nhận diện thương hiệu đồng bộ và nhất quán trên mọi điểm tiếp xúc",
      "C. Một logo thật phức tạp nhiều chi tiết",
      "D. Các tờ rơi quảng cáo in màu giá rẻ"
    ],
    correct: 1,
    explanation: "Khách hàng ghi nhớ thương hiệu thông qua sự xuất hiện lặp đi lặp lại một cách chuẩn mực, đồng bộ của cả hệ thống nhận diện (từ bao bì, bảng hiệu, đồng phục đến ấn phẩm số) trên toàn bộ các điểm tiếp xúc thương hiệu."
  },
  {
    id: 41,
    topic: "TRUYỀN THÔNG ATL & BTL",
    question: "Các hoạt động truyền thông tiếp thị 'bề nổi' (Above The Line - ATL) chủ yếu bao gồm các phương thức nào?",
    options: [
      "A. Quảng cáo trên các phương tiện truyền thông đại chúng (Truyền hình, Phát thanh, Báo chí, Internet), Quảng cáo ngoài trời (OOH), Quan hệ công chúng quy mô lớn",
      "B. Phát mẫu dùng thử tận tay người mua tại siêu thị và chiết khấu đại lý",
      "C. Các chương trình giảm giá chớp nhoáng tại quầy thanh toán",
      "D. Hoạt động trưng bày hàng hóa trên kệ tủ tại cửa hàng tạp hóa"
    ],
    correct: 0,
    explanation: "ATL (Above The Line) là các hoạt động tiếp thị đại chúng hướng tới số đông công chúng nhằm xây dựng mức độ nhận biết (Brand Awareness) và định vị hình ảnh thương hiệu thông qua TVC, OOH, Digital mass media."
  },
  {
    id: 42,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Kiến trúc thương hiệu của tập đoàn PepsiCo khi quản trị danh mục sản phẩm đồ uống và đồ ăn nhẹ (Pepsi, 7Up, Mirinda, Aquafina, Lay's, Doritos) thuộc mô hình nào?",
    options: [
      "A. Mô hình ngôi nhà thương hiệu thuần nhất cho mọi ngành bánh kẹo",
      "B. Mô hình đa thương hiệu / Ngôi nhà của các thương hiệu (House of Brands)",
      "C. Mô hình một sản phẩm duy nhất",
      "D. Mô hình phân tán không quản trị"
    ],
    correct: 1,
    explanation: "Tập đoàn PepsiCo quản trị hàng chục thương hiệu độc lập thuộc các phân khúc khác nhau (Lay's cho snack khoai tây, Tropicana cho nước ép, Aquafina cho nước suối, Quaker cho yến mạch). Khách hàng tiêu dùng sản phẩm dựa vào thương hiệu con chứ không bị chi phối bởi tên công ty mẹ PepsiCo."
  },
  {
    id: 43,
    topic: "PHÂN LOẠI THƯƠNG HIỆU",
    question: "Thương hiệu nào sau đây là ví dụ điển hình về một 'Thương hiệu toàn cầu' (Global Brand)?",
    options: [
      "A. Bánh mì Kinh Đô",
      "B. Cà phê Trung Nguyên",
      "C. Toyota",
      "D. Phở 2000"
    ],
    correct: 2,
    explanation: "Toyota là thương hiệu ô tô toàn cầu với hệ thống sản xuất, kinh doanh, nhận diện thương hiệu và thị phần đồng nhất trải rộng trên hầu hết các châu lục và quốc gia trên thế giới."
  },
  {
    id: 44,
    topic: "HỆ THỐNG PHÂN PHỐI",
    question: "Chuỗi siêu thị Co.opmart tại Việt Nam thuộc hình thức phân phối nào sau đây?",
    options: [
      "A. Phân phối trực tiếp từ nhà máy",
      "B. Phân phối bán lẻ tổng hợp (General Retailer)",
      "C. Phân phối chuyên ngành thời trang",
      "D. Phân phối độc quyền thương hiệu nước ngoài"
    ],
    correct: 1,
    explanation: "Siêu thị Co.opmart kinh doanh đa dạng hàng chục nghìn mặt hàng từ thực phẩm, đồ gia dụng, hóa mỹ phẩm đến may mặc của nhiều nhà sản xuất khác nhau, thuộc mô hình bán lẻ tổng hợp quy mô lớn."
  },
  {
    id: 45,
    topic: "CHỨC NĂNG CỦA THƯƠNG HIỆU",
    question: "Mục tiêu cơ bản và cốt lõi nhất của hoạt động xây dựng thương hiệu là tạo cho thương hiệu có được:",
    options: [
      "A. Chức năng nhận biết và phân biệt sản phẩm",
      "B. Chức năng thông tin và chỉ dẫn cho khách hàng",
      "C. Chức năng tạo sự cảm nhận tốt đẹp và lòng tin cậy bền vững",
      "D. Cả 3 chức năng trên đều đúng"
    ],
    correct: 3,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 1.1.3) chỉ rõ 4 chức năng nền tảng của thương hiệu: (1) Nhận biết và phân biệt; (2) Thông tin và chỉ dẫn; (3) Tạo sự cảm nhận và tin cậy; và (4) Chức năng kinh tế sinh lời."
  },
  {
    id: 46,
    topic: "TÀI SẢN THƯƠNG HIỆU",
    question: "Tài sản thương hiệu (Brand Equity) là một khái niệm:",
    options: [
      "A. Chỉ gói gọn trong việc khách hàng nhận diện được tên gọi",
      "B. Tổng hòa giá trị gia tăng được kiến tạo bởi lòng trung thành, mức độ nhận biết, chất lượng cảm nhận và các liên tưởng độc đáo",
      "C. Khoản tiền mặt hiện có trong tài khoản thanh toán của doanh nghiệp",
      "D. Giá niêm yết cổ phiếu trên sàn giao dịch chứng khoán tại một ngày nhất định"
    ],
    correct: 1,
    explanation: "Theo mô hình chuẩn của Aaker, tài sản thương hiệu là tập hợp 5 thành tố cấu thành: Nhận biết thương hiệu, Chất lượng cảm nhận, Liên tưởng thương hiệu, Lòng trung thành thương hiệu, và Các tài sản sở hữu trí tuệ độc quyền khác."
  },
  {
    id: 47,
    topic: "ĐỊNH VỊ THƯƠNG HIỆU",
    question: "Yếu tố nhận diện cốt lõi (Core Identity) của kem đánh răng Close-up từ trước đến nay luôn được định vị gắn liền với thuộc tính nào?",
    options: [
      "A. Hơi thở thơm tho và sự tự tin gắn kết tình yêu đôi lứa",
      "B. Chống sâu răng và ngừa viêm nướu cho trẻ nhỏ",
      "C. Dược liệu thảo dược đông y truyền thống",
      "D. Điều trị ê buốt chân răng chuyên khoa"
    ],
    correct: 0,
    explanation: "Close-up tạo ra điểm khác biệt độc đáo (POD) trong ngành hàng kem đánh răng bằng cách không định vị vào phòng ngừa sâu răng (yếu tố lý tính phổ thông) mà đánh vào cảm xúc: dạng gel lấp lánh, hương bạc hà cay nồng mang lại hơi thở thơm tho, giúp người trẻ tự tin sát lại gần nhau."
  },
  {
    id: 48,
    topic: "HÌNH ẢNH VS NHẬN DIỆN",
    question: "Hình ảnh thương hiệu (Brand Image) thực chất tồn tại ở nơi nào?",
    options: [
      "A. Trong sổ tay hướng dẫn của phòng tiếp thị",
      "B. Trong tâm trí và nhận thức chủ quan của khách hàng và công chúng",
      "C. Trên con dấu tròn của công ty",
      "D. Trong hợp đồng cung ứng dịch vụ quảng cáo"
    ],
    correct: 1,
    explanation: "Nếu Nhận diện thương hiệu (Brand Identity) là những gì doanh nghiệp gửi đi và mong muốn xây dựng, thì Hình ảnh thương hiệu (Brand Image) là bức tranh thực tế được phản chiếu và lưu giữ trong tâm trí của khách hàng."
  },
  {
    id: 49,
    topic: "TRUYỀN THÔNG ATL & BTL",
    question: "Các hoạt động truyền thông tiếp thị 'bề nổi' là thuật ngữ tiếng Việt được dịch từ cụm từ tiếng Anh nào?",
    options: [
      "A. Above The Line (ATL)",
      "B. Below The Line (BTL)",
      "C. Through The Line (TTL)",
      "D. Out Of Home (OOH)"
    ],
    correct: 0,
    explanation: "Thuật ngữ Above The Line (ATL) bắt nguồn từ ranh giới hạch toán chi phí hoa hồng quảng cáo đại chúng trong các agency quảng cáo, dịch sang tiếng Việt trong giáo trình quản trị là các hoạt động tiếp thị 'bề nổi'."
  },
  {
    id: 50,
    topic: "KHÍA CẠNH PHÁP LÝ & TÊN THƯƠNG MẠI",
    question: "Theo Luật Sở hữu trí tuệ Việt Nam, quyền sở hữu công nghiệp đối với 'Tên thương mại' được bảo hộ trong thời hạn bao lâu?",
    options: [
      "A. Trong vòng 10 năm và phải gia hạn",
      "B. Trong suốt thời gian tồn tại và sử dụng hợp pháp trong hoạt động kinh doanh của doanh nghiệp",
      "C. 5 năm kể từ ngày cấp giấy chứng nhận",
      "D. 20 năm tương tự bằng độc quyền sáng chế"
    ],
    correct: 1,
    explanation: "Căn cứ Điều 6 và Điều 78 Luật Sở hữu trí tuệ Việt Nam, quyền đối với tên thương mại được xác lập trên cơ sở sử dụng hợp pháp tên thương mại đó trong kinh doanh và được bảo hộ không cần đăng ký văn bằng, tồn tại suốt thời gian doanh nghiệp hoạt động hợp pháp."
  },
  {
    id: 51,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Mức độ bảo trợ của thương hiệu mẹ đối với thương hiệu con trong mô hình 'Thương hiệu chính bảo trợ nhẹ' so với mô hình 'Chính - phụ song song' sẽ:",
    options: [
      "A. Mạnh mẽ hơn và chi phối toàn bộ",
      "B. Yếu hơn, thương hiệu con có tính độc lập cao hơn",
      "C. Bằng nhau hoàn toàn về mọi mặt",
      "D. Không thể phân biệt được"
    ],
    correct: 1,
    explanation: "Trong mô hình bảo trợ nhẹ (Light Endorsement), thương hiệu chính chỉ đóng vai trò bảo chứng ngầm hoặc xuất hiện rất nhỏ ở góc bao bì, để thương hiệu con tự do phát triển tính cách riêng, do đó mức độ bảo trợ yếu hơn nhiều so với mô hình chính - phụ song song."
  },
  {
    id: 52,
    topic: "TÁI ĐỊNH VỊ THƯƠNG HIỆU",
    question: "Hành động nào dưới đây phản ánh sự TÁI ĐỊNH VỊ (Repositioning) thương hiệu một cách thực chất nhất?",
    options: [
      "A. Bổ sung thêm kích cỡ bao bì đóng gói lớn hơn",
      "B. Thay đổi tinh túy cốt lõi, giá trị cam kết và phân khúc khách hàng mục tiêu của thương hiệu",
      "C. Giảm bớt số giây phát sóng TVC quảng cáo trên truyền hình",
      "D. Thay thế đại sứ thương hiệu trong khi giữ nguyên toàn bộ sản phẩm và thông điệp"
    ],
    correct: 1,
    explanation: "Tái định vị là nỗ lực thay đổi vị thế và hình ảnh của thương hiệu trong tâm trí khách hàng, đòi hỏi phải điều chỉnh sâu sắc từ lời hứa giá trị, đối tượng mục tiêu đến bản sắc cạnh tranh của sản phẩm."
  },
  {
    id: 53,
    topic: "QUẢN TRỊ DANH MỤC THƯƠNG HIỆU",
    question: "Thương hiệu 'hình ảnh / đầu tàu' (Silver Bullet) trong danh mục thương hiệu đóng vai trò chủ yếu là gì?",
    options: [
      "A. Bán với mức giá rẻ nhất để cạnh tranh phá giá",
      "B. Hỗ trợ và nâng cao tích cực hình ảnh, uy tín công nghệ cho toàn bộ các thương hiệu khác trong danh mục",
      "C. Luôn được tung ra khi công ty chuẩn bị phá sản",
      "D. Là thương hiệu tạo ra sản lượng bán lớn nhất"
    ],
    correct: 1,
    explanation: "Thương hiệu hình ảnh (Silver Bullet / Halo Brand) có thể không mang lại sản lượng lớn nhất nhưng sở hữu công nghệ đột phá, thiết kế đỉnh cao nhằm định hình đẳng cấp và nâng cao giá trị liên tưởng cho toàn bộ danh mục của doanh nghiệp (ví dụ dòng Audi R8 hay Ford GT)."
  },
  {
    id: 54,
    topic: "TRUYỀN THÔNG PR & CÔNG NGHỆ",
    question: "Loại đầu đĩa DVD 'mắt rồng' của JVC có khả năng đọc được đĩa cong, vênh khác biệt hoàn toàn với đối thủ. Doanh nghiệp nên ưu tiên sử dụng công cụ nào để tạo sự tin tưởng?",
    options: [
      "A. Giảm giá sốc 50% ngay khi vừa tung ra",
      "B. Tập trung quảng bá thông qua công cụ PR, bài viết chuyên môn và sự kiện trải nghiệm thực tế để nêu bật sự khác biệt công nghệ khách quan",
      "C. Tặng kèm các sản phẩm giá rẻ kém chất lượng",
      "D. Không truyền thông gì để khách hàng tự khám phá"
    ],
    correct: 1,
    explanation: "Đối với các tính năng kỹ thuật mang tính đột phá và khó tin, công cụ PR cùng các buổi thử nghiệm công khai mang lại độ tin cậy vượt trội (Credibility) so với quảng cáo tự khen, giúp khách hàng tin vào tính năng đặc biệt mà tiết kiệm chi phí."
  },
  {
    id: 55,
    topic: "TRUYỀN THÔNG THƯƠNG HIỆU",
    question: "Các hoạt động thuộc phạm trù Quan hệ công chúng (PR) cơ bản bao gồm những nghiệp vụ nào?",
    options: [
      "A. Quan hệ báo chí truyền thông, tổ chức sự kiện, tài trợ cộng đồng, truyền thông nội bộ, quản trị và xử lý khủng hoảng",
      "B. Chạy quảng cáo biểu ngữ trực tuyến trả tiền theo lượt nhấp",
      "C. Thuê phát tờ rơi ngã tư đường",
      "D. Gọi điện thoại chào bán bảo hiểm tự động"
    ],
    correct: 0,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 5.2.2) trình bày đầy đủ các công cụ PR: Media relations (báo chí), Event marketing (sự kiện), Sponsorship (tài trợ), Internal PR (nội bộ), và Crisis management (xử lý khủng hoảng)."
  },
  {
    id: 56,
    topic: "HOẠCH ĐỊNH CHIẾN LƯỢC THƯƠNG HIỆU",
    question: "Trong tiến trình hoạch định chiến lược thương hiệu, việc nghiên cứu môi trường nội bộ doanh nghiệp nhằm đánh giá:",
    options: [
      "A. Năng lực sản xuất, nguồn lực tài chính, năng lực marketing, đội ngũ nhân sự và trình độ quản lý của chính doanh nghiệp",
      "B. Chiến lược bí mật của toàn bộ các đối thủ cạnh tranh",
      "C. Tỷ lệ lạm phát và lãi suất ngân hàng trung ương",
      "D. Chính sách thuế nhập khẩu của các quốc gia khác"
    ],
    correct: 0,
    explanation: "Phân tích môi trường nội bộ (Internal Audit) nhằm xác định các Điểm mạnh (Strengths) và Điểm yếu (Weaknesses) của chính tổ chức để làm nền tảng xây dựng năng lực thực thi lời hứa thương hiệu một cách khả thi."
  },
  {
    id: 57,
    topic: "ĐỊNH GIÁ & GIÁ TRỊ CẢM NHẬN",
    question: "Hai phương pháp định giá sản phẩm và thương hiệu căn bản nhất trong quản trị là:",
    options: [
      "A. Định giá dựa trên chi phí sản xuất (Cost-based) và Định giá dựa trên giá trị cảm nhận của khách hàng (Value-based)",
      "B. Định giá theo sở thích cá nhân của người bán và định giá bốc thăm",
      "C. Định giá theo dự đoán thời tiết và định giá theo tồn kho",
      "D. Luôn bán thấp hơn giá vốn để chiếm lĩnh thị trường"
    ],
    correct: 0,
    explanation: "Định giá dựa trên chi phí (Cost-based) cộng thêm biên lợi nhuận kỳ vọng; trong khi Định giá dựa trên giá trị cảm nhận (Value-based) là đỉnh cao của quản trị thương hiệu, định giá dựa trên mức độ hài lòng và giá trị mà thương hiệu đem đến cho khách hàng."
  },
  {
    id: 58,
    topic: "NGUỒN GỐC THƯƠNG HIỆU",
    question: "Thuật ngữ 'Brand' (thương hiệu) có gốc từ ngôn ngữ Bắc Âu cổ (Norse) bắt nguồn từ từ nào và có ý nghĩa nguyên thủy là gì?",
    options: [
      "A. Chữ 'Brandr', có nghĩa là đóng dấu bằng sắt nung đỏ lên vật nuôi để chứng thực quyền sở hữu",
      "B. Chữ 'Bravado', có nghĩa là sự dũng cảm của người chiến binh",
      "C. Chữ 'Banner', có nghĩa là lá cờ hiệu của đội quân",
      "D. Chữ 'Bonus', có nghĩa là phần quà tặng thưởng thêm"
    ],
    correct: 0,
    explanation: "Từ 'brand' xuất phát từ chữ Bắc Âu cổ 'brandr' (nghĩa là 'đốt cháy / nung đỏ'), chỉ hành động của những người chủ trang trại dùng que sắt nung nóng in dấu lên gia súc để phân biệt tài sản của mình với người khác."
  },
  {
    id: 59,
    topic: "HỆ THỐNG PHÂN PHỐI",
    question: "Một cửa hàng chỉ chuyên bán các sản phẩm may mặc sẵn của nhiều thương hiệu thời trang khác nhau (Việt Tiến, May 10, An Phước, Pierre Cardin) thuộc hình thức:",
    options: [
      "A. Phân phối trực tiếp",
      "B. Phân phối bán lẻ tổng hợp",
      "C. Phân phối chuyên ngành (Specialty store)",
      "D. Phân phối độc quyền một thương hiệu"
    ],
    correct: 2,
    explanation: "Cửa hàng chỉ tập trung vào một chủng loại mặt hàng hẹp duy nhất (ngành hàng may mặc thời trang nam) nhưng cung cấp chiều sâu sản phẩm đa dạng từ nhiều thương hiệu khác nhau là đặc trưng của cửa hàng chuyên ngành."
  },
  {
    id: 60,
    topic: "ĐẶT TÊN THƯƠNG HIỆU",
    question: "Tên gọi thương hiệu nào sau đây là ví dụ điển hình về việc đặt tên gắn liền với hình ảnh người bán hàng và phong cách phục vụ đặc trưng?",
    options: [
      "A. Cơm Bà Cả Đọi",
      "B. Sầu riêng Cái Mơn",
      "C. Nước khoáng Lavie",
      "D. Bột giặt Omo"
    ],
    correct: 0,
    explanation: "'Cơm Bà Cả Đọi' là tên thương hiệu đặt theo hình ảnh người chủ quán (người bán hàng) mang tính cách mộc mạc, gần gũi, gợi liên tưởng về phong cách ẩm thực gia đình truyền thống."
  },
  {
    id: 61,
    topic: "PHÂN TÍCH CẠNH TRANH",
    question: "Khi nghiên cứu và điều tra môi trường cạnh tranh, nhà quản trị thương hiệu cần dành sự quan tâm đặc biệt nhất đến yếu tố nào?",
    options: [
      "A. Thông tin về chiến lược, sản phẩm, năng lực, thị phần và định vị của các đối thủ cạnh tranh trực tiếp",
      "B. Biến động nhân sự của các ngành công nghiệp nặng không liên quan",
      "C. Dự báo chỉ số giá vàng thế giới trong 10 năm",
      "D. Số lượng hồ sơ tuyển dụng nhân sự thời vụ"
    ],
    correct: 0,
    explanation: "Phân tích cạnh tranh giúp thương hiệu tìm ra những khoảng trống thị trường (Market White-spaces), hiểu rõ điểm mạnh yếu của đối thủ để thiết lập chiến lược định vị khác biệt hóa thành công."
  },
  {
    id: 62,
    topic: "NHẬN DIỆN THƯƠNG HIỆU",
    question: "Khái niệm 'Nhận diện thương hiệu' (Brand Identity) phản ánh bản chất nào sau đây?",
    options: [
      "A. Nhận thức mục tiêu và tập hợp các giá trị, dấu hiệu mà doanh nghiệp chủ động kiến tạo và mong muốn khách hàng hiểu về thương hiệu",
      "B. Những tin đồn thất thiệt ngoài xã hội về công ty",
      "C. Số tiền doanh nghiệp đã thanh toán cho bên thiết kế",
      "D. Đánh giá chủ quan ngẫu nhiên của một người tiêu dùng bất kỳ"
    ],
    correct: 0,
    explanation: "Nhận diện thương hiệu (Brand Identity) thể hiện lý tưởng, tầm nhìn, bản sắc xuất phát từ chính doanh nghiệp (Inside-out), là những gì doanh nghiệp gửi gắm và nỗ lực kiến tạo trong tâm trí công chúng."
  },
  {
    id: 63,
    topic: "TRUYỀN THÔNG PR",
    question: "Nhược điểm lớn nhất của công cụ Quan hệ công chúng (PR) so với quảng cáo truyền thống là gì?",
    options: [
      "A. Doanh nghiệp khó kiểm soát hoàn toàn nội dung và thời điểm đăng tải vì phải thông qua góc nhìn và sự biên tập của bên thứ ba (báo chí, truyền thông)",
      "B. Chi phí luôn đắt đỏ hơn quảng cáo giờ vàng truyền hình gấp nhiều lần",
      "C. Thông điệp PR không bao giờ có độ tin cậy đối với bạn đọc",
      "D. Hoàn toàn không tiếp cận được người tiêu dùng"
    ],
    correct: 0,
    explanation: "Điểm hạn chế lớn nhất của PR là thiếu tính kiểm soát (Lack of control). Khác với quảng cáo trả tiền mua sóng để phát nguyên xi, bài PR phải qua lăng kính nhà báo và ban biên tập, có thể bị lược bớt hoặc phân tích theo góc nhìn đa chiều."
  },
  {
    id: 64,
    topic: "CHẤT LƯỢNG CẢM NHẬN",
    question: "Khái niệm 'Chất lượng cảm nhận' (Perceived Quality) của khách hàng được định nghĩa chính xác nhất là:",
    options: [
      "A. Các thông số kỹ thuật ghi nhận trong phòng thí nghiệm kiểm chuẩn",
      "B. Sự cảm nhận và đánh giá chủ quan của khách hàng về chất lượng tổng thể của sản phẩm/dịch vụ theo những tiêu chí riêng của chính họ",
      "C. Giấy chứng nhận chất lượng ISO do cơ quan nhà nước cấp",
      "D. Bảng liệt kê nguyên vật liệu sản xuất của nhà máy"
    ],
    correct: 1,
    explanation: "Giáo trình Quản trị thương hiệu (Mục 1.2, trang 36-37) nêu rõ: Chất lượng cảm nhận là đánh giá của người tiêu dùng về sự phù hợp và thỏa mãn nhu cầu của sản phẩm, bao gồm cả các thuộc tính 'phần cứng' và giá trị bổ sung 'phần mềm'."
  },
  {
    id: 65,
    topic: "ĐO LƯỜNG TÀI SẢN THƯƠNG HIỆU",
    question: "Trong giai đoạn phát triển và mở rộng thương hiệu, các tiêu chí đo lường tài sản thương hiệu quan trọng gồm:",
    options: [
      "A. Liên tưởng thương hiệu, chất lượng cảm nhận và tỷ lệ duy trì mua lặp lại (% Retention rate)",
      "B. Số lượng máy in tem nhãn trong xưởng đóng gói",
      "C. Tổng số bài đăng trên trang cá nhân của nhân viên",
      "D. Tiền điện nước thanh toán hàng tháng của văn phòng"
    ],
    correct: 0,
    explanation: "Đo lường sức khỏe tài sản thương hiệu trong giai đoạn phát triển đòi hỏi theo dõi cả mức độ gắn kết liên tưởng, lòng tin vào chất lượng vượt trội và tỷ lệ giữ chân khách hàng tiếp tục mua sắm."
  },
  {
    id: 66,
    topic: "LÒNG TRUNG THÀNH THƯƠNG HIỆU",
    question: "Để nuôi dưỡng và bảo vệ lòng trung thành của khách hàng đối với thương hiệu, doanh nghiệp nên áp dụng các biện pháp nào?",
    options: [
      "A. Đối xử nhất quán, trung thực và đúng đắn với khách hàng",
      "B. Thực hiện nghiêm túc và chu đáo các chương trình hậu mãi, chăm sóc sau bán",
      "C. Xây dựng và khai thác hiệu quả cơ sở dữ liệu khách hàng (CRM)",
      "D. Cả 3 câu trên đều đúng"
    ],
    correct: 3,
    explanation: "Nuôi dưỡng khách hàng trung thành là một quy trình tổng thể từ thái độ phục vụ tôn trọng, dịch vụ hậu mãi vượt kỳ vọng đến việc quản trị dữ liệu khách hàng để cá nhân hóa ưu đãi và gắn kết bền lâu."
  },
  {
    id: 67,
    topic: "PHÂN TÍCH MÔI TRƯỜNG",
    question: "Môi trường hoạt động bên ngoài (External Environment) của một doanh nghiệp bao gồm hai cấp độ nào?",
    options: [
      "A. Môi trường vi mô (ngành cạnh tranh, khách hàng, nhà cung cấp) và Môi trường vĩ mô (kinh tế, chính trị, pháp luật, văn hóa - PESTLE)",
      "B. Môi trường trong phòng họp và môi trường nhà ăn công ty",
      "C. Môi trường máy tính văn phòng và môi trường giấy tờ",
      "D. Môi trường ban ngày và môi trường ban đêm"
    ],
    correct: 0,
    explanation: "Môi trường bên ngoài cấu thành từ: môi trường vi mô (gắn liền trực tiếp với hoạt động ngành) và môi trường vĩ mô (các yếu tố bao quát toàn xã hội như thể chế, kinh tế, nhân khẩu học, công nghệ...)."
  },
  {
    id: 68,
    topic: "XÚC TIẾN BÁN & KHUYẾN MẠI",
    question: "Hoạt động 'Khuyến mại' (Sales Promotion) theo Luật Thương mại và Marketing thường hướng đến mục tiêu nào?",
    options: [
      "A. Khuyến khích người tiêu dùng dùng thử sản phẩm mới hoặc thúc đẩy mua sắm lặp lại với số lượng lớn trong ngắn hạn",
      "B. Hỗ trợ hệ thống phân phối xả hàng tồn kho nhanh chóng",
      "C. Kích cầu tiêu dùng khi doanh số có dấu hiệu chững lại",
      "D. Cả 3 câu trên đều đúng"
    ],
    correct: 3,
    explanation: "Khuyến mại là công cụ ngắn hạn nhằm tạo động lực mua hàng ngay lập tức thông qua quà tặng, giảm giá, bốc thăm may mắn, giúp giải quyết nhanh bài toán dòng tiền và thâm nhập thị trường."
  },
  {
    id: 69,
    topic: "BẢN CHẤT THƯƠNG HIỆU",
    question: "Khẳng định nào sau đây phản ánh ĐẦY ĐỦ NHẤT về thương hiệu của một sản phẩm?",
    options: [
      "A. Không chỉ là một biểu tượng hay nhãn hiệu đơn thuần, mà là toàn bộ sự tích lũy về nhận thức, trải nghiệm và giá trị trong tâm trí người tiêu dùng",
      "B. Chỉ là tên gọi đã được in trên nhãn sản phẩm",
      "C. Chỉ là văn bản hợp đồng giao dịch thương mại",
      "D. Chỉ là khẩu hiệu in trên bao bì"
    ],
    correct: 0,
    explanation: "Thương hiệu không bao giờ chỉ dừng lại ở các dấu hiệu hình thức mà là tổng hòa của mọi tương tác và ấn tượng đọng lại trong tâm trí công chúng suốt quá trình sản phẩm phục vụ đời sống."
  },
  {
    id: 70,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Thương hiệu kẹo cao su 'Orbit - Whitening' được cấu tạo theo mô hình kiến trúc nào?",
    options: [
      "A. Mô hình nối tên thương hiệu (Brand Extension / Sub-brand modifier)",
      "B. Mô hình thương hiệu chính - phụ song song",
      "C. Mô hình hợp tác liên minh đa tập đoàn",
      "D. Mô hình phân tán không có quy luật"
    ],
    correct: 0,
    explanation: "'Orbit' là tên thương hiệu mẹ, từ nối 'Whitening' đóng vai trò là yếu tố biến thể (modifier) mô tả thuộc tính công dụng làm trắng răng của dòng sản phẩm mới."
  },
  {
    id: 71,
    topic: "TRUYỀN THÔNG ATL & BTL",
    question: "Thuật ngữ 'Below The Line' (BTL) trong hoạt động xây dựng thương hiệu dùng để chỉ nhóm hoạt động nào?",
    options: [
      "A. Các hoạt động tiếp thị trực tiếp, kích hoạt thương hiệu tại điểm bán, phát mẫu thử (sampling) và khuyến mại cụ thể",
      "B. Các chiến dịch quảng cáo truyền hình quốc gia vào khung giờ vàng",
      "C. Các bài phóng sự chuyên sâu trên các tạp chí kinh tế quốc tế",
      "D. Các biển bảng quảng cáo LED tấm lớn tại trung tâm thành phố"
    ],
    correct: 0,
    explanation: "BTL (Below The Line) là các hoạt động tiếp thị hướng đến đối tượng mục tiêu cụ thể tại điểm bán (POP), mang tính tương tác trực tiếp, đo lường chuyển đổi doanh số ngắn hạn."
  },
  {
    id: 72,
    topic: "CHẤT LƯỢNG CẢM NHẬN",
    question: "Một sản phẩm có 'Chất lượng khách quan' cao nhưng 'Chất lượng cảm nhận' (Perceived Quality) thấp thì điều gì sẽ xảy ra trên thị trường?",
    options: [
      "A. Khách hàng vẫn e ngại, định giá thấp cho sản phẩm và ngần ngại ra quyết định mua hàng",
      "B. Sản phẩm đương nhiên tự động bán chạy với giá rất cao",
      "C. Khách hàng không quan tâm đến bao bì và tiếp thị",
      "D. Không ảnh hưởng gì đến doanh số bán hàng"
    ],
    correct: 0,
    explanation: "Trong marketing, nhận thức của khách hàng chính là thực tế (Perception is reality). Dù sản phẩm rất tốt về mặt kỹ thuật trong phòng thí nghiệm nhưng nếu doanh nghiệp truyền thông kém, bao bì nghèo nàn khiến chất lượng cảm nhận thấp, khách hàng sẽ không sẵn lòng chi trả."
  },
  {
    id: 73,
    topic: "TÀI SẢN THƯƠNG HIỆU",
    question: "Yếu tố nào sau đây KHÔNG thuộc phạm trù tài sản thương hiệu (Brand Equity) theo mô hình của David Aaker?",
    options: [
      "A. Giá trị khấu hao tài sản cố định của nhà máy sản xuất theo bảng cân đối kế toán",
      "B. Mức độ nhận biết thương hiệu (Brand Awareness)",
      "C. Lòng trung thành thương hiệu (Brand Loyalty)",
      "D. Chất lượng cảm nhận (Perceived Quality)"
    ],
    correct: 0,
    explanation: "Khấu hao máy móc là một chỉ tiêu kế toán hữu hình thuần túy, hoàn toàn không nằm trong các cấu phần tài sản thương hiệu vô hình theo mô hình của David Aaker."
  },
  {
    id: 74,
    topic: "KIẾN TRÚC THƯƠNG HIỆU",
    question: "Mô hình kiến trúc thương hiệu 'Ngôi nhà của những thương hiệu' (House of Brands) điển hình nhất trên thế giới được áp dụng bởi tập đoàn nào?",
    options: [
      "A. Procter & Gamble (P&G) với các thương hiệu độc lập như Tide, Pampers, Pantene, Head & Shoulders, Gillette",
      "B. Google (sử dụng tên Google Maps, Google Drive, Google Mail)",
      "C. Honda (sử dụng Honda Civic, Honda CR-V, Honda Wave)",
      "D. Samsung (sử dụng Samsung Galaxy, Samsung SmartTV)"
    ],
    correct: 0,
    explanation: "P&G là ví dụ điển hình nhất của mô hình House of Brands: mỗi sản phẩm là một thương hiệu hoàn toàn độc lập, có định vị và khách hàng riêng, tên tập đoàn P&G hầu như không xuất hiện chi phối trên bao bì."
  },
  {
    id: 75,
    topic: "KHÍA CẠNH PHÁP LÝ & TÊN THƯƠNG MẠI",
    question: "Điểm khác biệt căn bản giữa 'Tên thương mại' và 'Nhãn hiệu hàng hóa' theo Luật Sở hữu trí tuệ Việt Nam là gì?",
    options: [
      "A. Tên thương mại dùng để nhận diện pháp nhân chủ thể kinh doanh; nhãn hiệu dùng để phân biệt hàng hóa, dịch vụ cụ thể của các chủ thể",
      "B. Tên thương mại và nhãn hiệu hoàn toàn đồng nhất không có bất kỳ khác biệt nào",
      "C. Tên thương mại chỉ dùng cho sản phẩm may mặc",
      "D. Nhãn hiệu chỉ được bảo hộ trong 1 năm"
    ],
    correct: 0,
    explanation: "Tên thương mại (Trade name) gắn với tên pháp lý của doanh nghiệp đăng ký kinh doanh; trong khi Nhãn hiệu (Trademark) gắn trực tiếp với sản phẩm/dịch vụ đưa ra lưu thông trên thị trường."
  },
  {
    id: 76,
    topic: "MỞ RỘNG THƯƠNG HIỆU",
    question: "Khi doanh nghiệp sử dụng một tên thương hiệu hiện có để tung ra một sản phẩm mới trong một chủng loại ngành hàng hoàn toàn mới, chiến lược đó gọi là:",
    options: [
      "A. Mở rộng thương hiệu (Brand Extension)",
      "B. Mở rộng dòng sản phẩm (Line Extension)",
      "C. Đa thương hiệu (Multi-brands)",
      "D. Tái định vị thương hiệu (Repositioning)"
    ],
    correct: 0,
    explanation: "Mở rộng dòng (Line extension) là tung thêm vị mới/màu mới trong cùng ngành hàng hiện tại; còn Mở rộng thương hiệu (Brand extension) là dùng tên thương hiệu hiện có để lấn sân sang một danh mục ngành hàng mới (ví dụ Caterpillar từ máy xúc mở rộng sang giày bốt bảo hộ và áo khoác)."
  },
  {
    id: 77,
    topic: "RỦI RO MỞ RỘNG THƯƠNG HIỆU",
    question: "Rủi ro nguy hiểm lớn nhất của chiến lược mở rộng thương hiệu (Brand Extension) sai lầm là gì?",
    options: [
      "A. Làm pha loãng thương hiệu (Brand Dilution) và làm suy yếu hình ảnh cốt lõi của thương hiệu gốc nếu sản phẩm mới thất bại",
      "B. Làm tăng doanh thu của công ty mẹ quá nhanh",
      "C. Khiến khách hàng ghi nhớ thương hiệu sâu sắc hơn",
      "D. Không có bất kỳ rủi ro nào phát sinh"
    ],
    correct: 0,
    explanation: "Pha loãng thương hiệu (Brand Dilution) xảy ra khi mở rộng sang lĩnh vực không tương thích hoặc chất lượng kém, làm mờ nhạt bản sắc và kéo tụt uy tín tích lũy của thương hiệu gốc trong tâm trí khách hàng."
  },
  {
    id: 78,
    topic: "ĐỊNH VỊ POP & POD",
    question: "Khái niệm 'Điểm tương đồng' (Points of Parity - POP) trong định vị thương hiệu có ý nghĩa gì?",
    options: [
      "A. Những thuộc tính hoặc lợi ích mà thương hiệu bắt buộc phải có để được khách hàng công nhận là thành viên hợp lệ của một ngành hàng",
      "B. Những thuộc tính độc nhất vô nhị không ai có",
      "C. Giá bán đắt nhất trong toàn bộ phân khúc",
      "D. Khẩu hiệu quảng cáo độc quyền"
    ],
    correct: 0,
    explanation: "POP (Points of Parity) là 'vé vào cửa' bắt buộc: ví dụ một ngân hàng điện tử thì tính năng chuyển tiền 24/7 và bảo mật là POP mà bắt buộc phải có, trước khi bàn đến các điểm khác biệt (POD)."
  },
  {
    id: 79,
    topic: "KHÍA CẠNH PHÁP LÝ & BẢO HỘ NHÃN HIỆU",
    question: "Theo Luật Sở hữu trí tuệ Việt Nam, Giấy chứng nhận đăng ký nhãn hiệu có hiệu lực trong bao lâu và có thể gia hạn như thế nào?",
    options: [
      "A. 10 năm kể từ ngày nộp đơn hợp lệ và có thể gia hạn nhiều lần liên tiếp, mỗi lần 10 năm",
      "B. 10 năm và không được phép gia hạn",
      "C. 20 năm tương tự bằng độc quyền sáng chế",
      "D. Vô thời hạn kể từ ngày cấp"
    ],
    correct: 0,
    explanation: "Căn cứ Điều 93 Luật Sở hữu trí tuệ Việt Nam: Giấy chứng nhận đăng ký nhãn hiệu có hiệu lực từ ngày cấp đến hết 10 năm kể từ ngày nộp đơn, có thể gia hạn nhiều lần liên tiếp, mỗi lần 10 năm, giúp nhãn hiệu có thể tồn tại vĩnh viễn nếu duy trì nộp phí gia hạn."
  },
  {
    id: 80,
    topic: "KHÍA CẠNH PHÁP LÝ & BẢO HỘ NHÃN HIỆU",
    question: "Một nhãn hiệu đã được cấp văn bằng bảo hộ tại Việt Nam có nguy cơ bị bên thứ ba yêu cầu hủy bỏ hiệu lực nếu chủ sở hữu không sử dụng liên tục trong thời gian bao lâu mà không có lý do chính đáng?",
    options: [
      "A. 1 năm",
      "B. 3 năm",
      "C. 5 năm liên tục",
      "D. 10 năm"
    ],
    correct: 2,
    explanation: "Căn cứ Điều 95 Luật Sở hữu trí tuệ Việt Nam: Văn bằng bảo hộ nhãn hiệu bị chấm dứt hiệu lực nếu nhãn hiệu không được chủ sở hữu hoặc người được ủy quyền sử dụng trong thời hạn 5 năm liên tục trước ngày có yêu cầu chấm dứt mà không có lý do chính đáng."
  }
];

