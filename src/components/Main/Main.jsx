import { Link } from "react-router-dom";
import { BrowserSvg, CallSvg, EmailSvg, SmsSvg } from "./MainSvg";
import { vCardData } from "./VdCardData.js";
import translations from "../../language.json";
import {  useSelector } from "react-redux";
import {sselectedLanguage } from "../../store/slices/selectedLanguageSlice";

import "./main.scss";

const Main = () => {
  const sselectedLanguages = useSelector(sselectedLanguage);

  const saveContact = () => {
    const vCardBlob = new Blob([vCardData], { type: "text/vcard" });
    const vCardUrl = URL.createObjectURL(vCardBlob);

    const a = document.createElement("a");
    a.href = vCardUrl;
    a.download = "Narek_Meliksetyan.vcf"; 
    a.click();
  };

  



  return (
    <main className="main">
      <h1>{translations[sselectedLanguages].name}</h1>
      <h2>{translations[sselectedLanguages].frontEndDeveloper}</h2>
      <div className="main__contact">
        <div className="main__contact-top">
          <Link to="tel:+37477873707">
            <CallSvg />
          </Link>
          <Link to="sms:+37477873707?body=Բարև, ինչպես ես ?">
            <SmsSvg />
          </Link>{" "}
          <Link to="mailto:meliksetyan415@gmail.com?subject=Հարց%20առաջարկի%20մասին&body=Բարև%20ձեզ,%0A%0AԵս%20հետաքրքրված%20եմ%20ձեր%20առաջարկով,%20և%20կցանկանայի%20ավելին%20իմանալ։%0A%0AՀարգանքով,%0A[Ձեր%20Անունը]">
            <EmailSvg />
          </Link>{" "}
          <Link to="https://narek-013.github.io/portfolio/#main" target="_blank">
            <BrowserSvg />
          </Link>
        </div>
        <button onClick={saveContact}>{translations[sselectedLanguages].saveContact}</button>
      </div>
    </main>
  );
};

export default Main;
