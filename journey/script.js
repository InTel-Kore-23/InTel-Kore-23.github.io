var aText = ["🌟 Vậy trên chuyến bay mang số hiệu IT-K23 có những ai? 🌟", "Cơ trưởng cô Lê Thị Minh Thư - người dìu dắt những cô cậu bé đam mê Tin học bằng sự dịu dàng lẫn sự nhiệt huyết. 🌷", "Cùng với cơ phó thầy Nguyễn Văn Như - người luôn lắng nghe và truyền cảm hứng cho mỗi bước tiến của ITK23ers.🔥", "Và chúng mình là 35 hành khách mang trong mình những trái tim trẻ tràn đầy nhiệt huyết, say mê và không ngừng khám phá thế giới công nghệ đầy diệu kỳ. Trải qua bao thử thách và sự nỗ lực không ngừng nghỉ, giờ đây chúng mình đã cùng nhau đặt chân lên chiếc tàu bay này - nơi mà sự sáng tạo được thỏa sức bùng nổ mạnh mẽ, và tri thức trở thành “nguồn năng lượng” vững chắc để “lái” ước mơ bay cao và bay xa hơn nữa. ❤‍🔥", "💫 Hãy đồng hành cùng tàu bay mang số hiệu IT-K23 💫", "Trên suốt chặng bay của tàu bay mang số hiệu IT-K23, chúng mình không chỉ mong muốn đến để được học hỏi, mà còn đến để kết nối những trái tim, sẻ chia những niềm vui, nỗi buồn và cùng nhau vun đắp những ước mơ lớn. Với ITK23ers, mỗi thử thách phía trước đều sẽ là một cơ hội để trở nên mạnh mẽ hơn và trưởng thành hơn. 🤜🤛", "Chúng mình rất mong được các bạn dõi theo và cùng đồng hành trong chuyến bay đầy ý nghĩa này. 🥺"];
var iSpeed = 53;
var iIndex = 0;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
    var scrollTarget = document.getElementById("scrollFit");

    if (destination.scrollHeight - destination.scrollTop <= destination.clientHeight) {
        destination.innerHTML = '';
    }

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

    //scrollTarget.scrollIntoView({ behavior: "smooth" });
    
    if (iTextPos++ == aText[iIndex].length) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            setTimeout(typewriter, 100);
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

function handleClick() {
    typewriter();
    var x = document.getElementById("Voice");
    x.play();
    var y = document.getElementById("Chill");
    y.volume = 0.1;
    y.play();
    var z = document.getElementById("lockScreen");
    z.style.display = "block";
    const element = document.getElementById("BUTTON");
    element.remove();
}
