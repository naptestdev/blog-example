---
title: Tại sao Teraflop không còn là đơn vị đo hợp lý trong đánh giá GPU?
date: 2023-06-12
---

Teraflop (TFLOP) lâu nay thường được ca ngợi là thước đo tuyệt vời cho mọi phép so sánh khả năng hoạt động, hay nói đơn giản là hiệu năng của GPU. Tuy nhiên, với sự phát triển và thay đổi không ngừng của thế giới công nghệ, phép đo dựa trên TFLOP đã bắt đầu bộc lộ một số điểm hạn chế.

Sự đơn giản hóa quá mức mà TFLOP mang lại đang dần không theo kịp được độ phức tạp của GPU, che giấu hiệu suất thực sự của chúng. Thay vào đó, kiểm tra hiệu năng trong thực tế, hiểu biết sâu sắc về kiến trúc và cách sử dụng theo tình huống cụ thể mới là vấn đề quan trọng.

![GPU](https://st.quantrimang.com/photos/image/2023/06/13/tai-sao-teraflop-khong-con-la-don-vi-do-hop-ly-trong-danh-gia-gpu1.jpg)

## Teraflop là gì?

Teraflop đề cập đến khả năng của bộ xử lý trong việc tính toán 1 nghìn tỷ phép toán dấu chấm động mỗi giây. Ví dụ, nói một cái gì đó có “6 TFLOP”, nghĩa là thiết lập bộ xử lý của nó có khả năng xử lý trung bình 6 nghìn tỷ phép tính dấu chấm động mỗi giây.

Trong thế giới của các đơn vị xử lý đồ họa (GPU), teraflop thường được sử dụng làm thước đo hiệu suất. Về cơ bản, số lượng teraflop càng cao thì GPU có thể xử lý càng nhiều phép tính trong một giây, được cho là dẫn đến hiệu suất tốt hơn.

Microsoft đánh giá bộ xử lý tùy chỉnh Xbox Series X của mình ở mức 12 TFLOP, nghĩa là console có khả năng thực hiện 12 nghìn tỷ phép tính dấu chấm động mỗi giây. Để so sánh, GPU AMD Radeon Pro bên trong MacBook Pro 16 inch của Apple đạt đỉnh với 4 teraflop, trong khi Mac Pro được thiết kế lại có thể đạt tới 56 teraflop.

Teraflop được lấy từ các thông số kỹ thuật phần cứng của GPU, chủ yếu là tốc độ xung nhịp lõi, số lượng lõi và số lượng hoạt động trên mỗi chu kỳ. Đó là một con số dễ hiểu, nhưng giống như bất kỳ số liệu đơn giản hóa nào, nó sẽ mất đi độ chính xác khi sử dụng sai.

## Khi nào thì Teraflop phù hợp để so sánh hiệu năng GPU?

Teraflops có thể hữu ích khi so sánh các GPU có cùng kiến trúc và ngang thế hệ. Vì các GPU này được phát triển trên cùng một công nghệ, nên chúng thường mở rộng hiệu suất theo số lượng teraflop có thể dự đoán được.

Ví dụ: nếu bạn so sánh hai card đồ họa thuộc cùng dòng NVIDIA RTX 3000, model nào có số teraflop cao hơn thường sẽ hoạt động tốt hơn. Điều đó là do các mẫu GPU này được thiết kế tương tự nhau và bất kỳ sự khác biệt nào về hiệu suất có thể chủ yếu là do sức mạnh xử lý của chúng, được biểu thị bằng số lượng teraflop.

## Khi nào thì Teraflop không phù hợp để so sánh hiệu năng GPU?

Tuy nhiên, teraflop sẽ trở nên kém tin cậy hơn nhiều khi so sánh giữa các GPU sở hữu kiến trúc hoặc thế hệ khác nhau.

Cách GPU cho ra kết quả teraflop có thể thay đổi đáng kể dựa trên kiến trúc của nó. Chẳng hạn, GPU NVIDIA sử dụng teraflop của nó khác với GPU AMD, dẫn đến các mức hiệu suất khác nhau mặc dù số lượng teraflop tương tự nhau. Tương tự, một GPU hiện đại sẽ sử dụng teraflop hiệu quả hơn so với GPU cũ, ngay cả khi chúng có cùng số lượng TFLOP

Nói cách khác, teraflop chỉ kể ra một phần của câu chuyện. Chúng không thể nói rõ sự khác biệt về hiệu quả, băng thông bộ nhớ hoặc tối ưu hóa trình điều khiển có thể ảnh hưởng đến hiệu suất đáng kể như thế nào.

## GPU đang hoạt động thông minh hơn

GPU ngày nay ngày càng trở nên phức tạp và thông minh. Chúng không chỉ thực hiện các phép tính một cách miệt mài và chăm chỉ như trước, mà thay vào đó làm việc thông minh hơn.

Ví dụ: Nhiều mẫu GPU hiện đại được trang bị các công nghệ như DLSS (NVIDIA) hay FidelityFX Super Resolution (AMD), sử dụng AI để nâng cấp hình ảnh độ phân giải thấp trong thời gian thực, cải thiện hiệu suất mà không làm giảm chất lượng hình ảnh. Những công nghệ này có thể nâng cao đáng kể hiệu suất của GPU và chúng không liên quan gì đến teraflop.

Tương tự, những tiến bộ trong kiến trúc, chẳng hạn như quản lý bộ nhớ và xử lý song song tốt hơn, có thể cải thiện đáng kể hiệu năng của GPU. Một lần nữa, những cải tiến này không được phản ánh trong số lượng teraflop.

## "Giả mạo" số TFLOP

Một vấn đề khác khi sử dụng teraflop để so sánh GPU là các con số có thể bị thao túng. Các nhà sản xuất có thể “tăng” số lượng teraflop của họ bằng cách tăng tốc độ xung nhịp lõi hoặc số lượng lõi.

Tuy nhiên, những sự tăng cường này thường không dẫn đến cải tiến hiệu suất trong thực tế, vì chúng có thể dẫn đến tăng mức tiêu thụ điện năng và sinh nhiệt, qua đó có thể làm giảm tốc độ GPU và làm giảm hiệu suất. Ngoài ra, ngay cả khi có sự gia tăng hiệu suất, thì nó cũng không tỷ lệ thuận với sự gia tăng TFLOP (lý thuyết), do các hạn chế trong kiến trúc của GPU, chẳng hạn như tắc nghẽn băng thông bộ nhớ hoặc bộ nhớ cache hạn chế của GPU.

## So sánh hiệu suất GPU thế nào là tối ưu?

Nếu teraflop không phải là cách đáng tin cậy để so sánh GPU, thì đó là gì? Câu trả lời rất đơn giản: thử nghiệm hiệu suất trong thực tế.

Điểm benchmark hiệu suất, chẳng hạn như do các bên đánh giá độc lập thực hiện, thường cung cấp thước đo chính xác nhất về hiệu suất của GPU. Chúng liên quan đến việc chạy GPU thông qua một loạt tác vụ hoặc trò chơi thực tế và đo lường hiệu suất của nó.

Khi nhìn vào điểm benchmark, điều quan trọng là phải xem xét các tác vụ hoặc trò chơi cụ thể mà bạn sẽ sử dụng GPU. GPU của bạn có thể vượt trội ở nhiệm vụ này nhưng hoạt động kém ở một tác vụ khác, vì vậy hãy thử nghiệm với thang đánh giá benchmark hợp với trường hợp sử dụng của bạn.

Ngoài hiệu năng, hãy xem xét các yếu tố khác như mức tiêu thụ điện năng, nhiệt lượng tỏa ra và chi phí. Một mẫu GPU có thể cho hiệu suất tuyệt vời, nhưng lại không phải là lựa chọn tốt nhất của bạn nếu nó quá ngốn điện hoặc đắt tiền.