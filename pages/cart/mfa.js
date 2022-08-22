import React, { useState, useEffect } from "react";
import * as storage from "../../utils/storage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QRCode from "react-qr-code";
import { TOTP_VALUE } from  "../../utils/totp";


const GenerateMFA = () => {
  const [mfaEnabled, setMFAEnabled] = useState(false);
  useEffect(() => {
      setMFAEnabled(storage.get("hasMfa"))
  });

  const changeMfaSetting = async (isEnabled) => {
    storage.set("hasMfa", isEnabled);
    setMFAEnabled(isEnabled)
  };

  return (
    <>
      <Header />
      <main role="main">
        <div className="py-5">
          <div className="container bg-light py-3 px-lg-5">
            { mfaEnabled
                ? (
                    <>
                      <div className="row mt-5 py-2">
                        <div className="col">
                          <h3>Please add this code to your 2-FA authentication app</h3>
                        </div>
                      </div>
                      <hr />
                      <br />
                      <QRCode id="qr-code" value={TOTP_VALUE} />
                    </>
                  )
                : null
            }
            <div>
              <button className="btn btn-info btn-lg ml-3" onClick={() => changeMfaSetting(!mfaEnabled)}>
                { mfaEnabled ? "Disable MFA" : "Enable MFA" }
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GenerateMFA;

