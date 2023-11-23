import React, { useEffect, useState } from "react";
import "./Url.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";
uuidv4();
const Linkurl = () => {
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [shorturl, setShorturl] = useState(
    JSON.parse(localStorage.getItem("shorturl")) || []
  );
  const [longurl, setLongurl] = useState(
    JSON.parse(localStorage.getItem("longurl")) || []
  );

  // handles the copybtn timeout
  useEffect(() => {
    let timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    window.localStorage.setItem("longurl", JSON.stringify(longurl));
  }, [longurl]);
  useEffect(() => {
    window.localStorage.setItem("shorturl", JSON.stringify(shorturl));
  }, [shorturl]);

  // fetching of api data goes here
  const Apidata = async () => {
    let response = await fetch(
      `https://tinyurl.com/api-create.php?url=${value}`
    );
    let data = await response.text();
    setShorturl(data);
  };

  // handels submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length == 0) {
      setError(true);
    } else {
      setError(false);
      setLongurl(value);
      setValue("");
      Apidata();
    }
  };
  return (
    <div className="link-wrapper">
      <form className="link-form" onSubmit={handleSubmit}>
        <div className="inputerror">
          <input
            className="link-input"
            type="text"
            value={value}
            placeholder="Shorten a link here..."
            onChange={(e) => setValue(e.target.value)}
          />
          {error && value.length <= 0 ? (
            <p className="errormessage"> please add a link</p>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="submit-btn">
          Shorten it!
        </button>
      </form>
      <div className="userlink">
        <p className="linkold"> {longurl} </p>
        <div className="copy">
          <p className="linknew">{shorturl} </p>
          <CopyToClipboard text={shorturl} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : "copy-btn"}>Copy</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Linkurl;
