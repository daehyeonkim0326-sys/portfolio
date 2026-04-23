import React, { useEffect, useRef, useState } from "react";
import "./contact.scss";
const Contact = () => {
  const emailText = "daeheyonkim0326@naver.com";
  const phoneText = "010-4607-3916";
  const githubText = "https://github.com/daehyeonkim0326-sys";
  const [emailPh, setEmailPh] = useState("");
  const [phonePh, setPhonePh] = useState("");
  const [githubPh, setGithubPh] = useState("");
  
  const [copiedKey, setCopiedKey] = useState(null); // "email" | "phone" | "github" | null
  
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const githubRef = useRef(null);
  
  const started = useRef({ email: false, phone: false, github: false });
  const timersRef = useRef([]);

  
  useEffect(() => {
    const runTyping = (key, text, setState) => {
      if (started.current[key]) return;
      started.current[key] = true;

      let i = 0;
      const timer = setInterval(() => {
        i += 1;
        setState(text.slice(0, i));
        if (i >= text.length) clearInterval(timer);
      }, 80);

      timersRef.current.push(timer);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          if (entry.target === emailRef.current) {
            runTyping("email", emailText, setEmailPh);
          } else if (entry.target === phoneRef.current) {
            runTyping("phone", phoneText, setPhonePh);
          } else if (entry.target === githubRef.current) {
            runTyping("github", githubText, setGithubPh);
          }
        }
      },
      { threshold: 0.4 }
    );

    if (emailRef.current) io.observe(emailRef.current);
    if (phoneRef.current) io.observe(phoneRef.current);
    if (githubRef.current) io.observe(githubRef.current);

    return () => {
      io.disconnect();
      timersRef.current.forEach(clearInterval);
      timersRef.current = [];
    };
  }, []);

  const copyText = async (key, text) => {
    // 타이핑 중일 수도 있으니, 복사는 "최종 텍스트" 기준으로 하는 게 보통 더 좋음
    // const toCopy = text;

    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // 일부 환경 fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 900);
  };
  
  const getDisplayText = (key, text) => {
    return copiedKey === key ? "Copied ✅" : text;
  };

  const getInputWidth = (text) => {
    return `${Math.max(text.length + 1, 5)}ch`;
  };
  const getInputWidthNew = (text) => {
    return `${Math.max(text.length + -4, 10)}ch`;
  };

  return (
    <div className="contact">

      <div className="info">
      <h1>THANK YOU</h1>
      <div className="contact-methods">
          <div ref={phoneRef}>
              <input
                className="input"
                readOnly
                value=""
                placeholder={copiedKey === "phone" ? "Copied ✅" : phonePh}
                onClick={() => copyText("phone", phoneText)}
              style={{
                cursor: "pointer",
                width: getInputWidth(getDisplayText("phone", phonePh)),
            }}
          />
        </div>
        <div ref={emailRef}>
          <input
            className="input"
            readOnly
            value="" // ✅ value 비워두고 placeholder만 보여주기
            placeholder={copiedKey === "email" ? "Copied ✅" : emailPh}
            onClick={() => copyText("email", emailText)}
            style={{
              cursor: "pointer",
              width: getInputWidth(getDisplayText("email", emailPh)),
            }}
          />
        </div>


        <div ref={githubRef}>
          <input
            className="input"
            readOnly
            value=""
            placeholder={copiedKey === "github" ? "Copied ✅" : githubPh}
            onClick={() => copyText("github", githubText)}
            style={{
              cursor: "pointer",
              width: getInputWidthNew(getDisplayText("github", githubPh)),
            }}
          />
        </div>
      </div>
    </div>
      <div className="lp spinning">
          <div className="label">
          <div className="label-hole"></div>
          </div>
      </div>  
    </div>
  );
};

export default Contact;

