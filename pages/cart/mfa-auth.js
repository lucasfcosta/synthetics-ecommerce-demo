import React, { useCallback, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TOTP_VALUE, generateTotp } from  "../../utils/totp";
import { Form, Field } from "react-final-form";
import { placeOrder } from "../../utils/orders";

// Here to aid entering an MFA without having to set it up
console.log(`MFA Code: ${generateTotp(TOTP_VALUE)}`)

const MFAAuth = () => {
  const [ hasError, setHasError ] = useState(false)

  const onSubmit = useCallback(async ({ mfa }) => {
    const expectedTotp = generateTotp(TOTP_VALUE)
    if (mfa === expectedTotp) {
      return placeOrder();
    } else {
      setHasError(true)
    }
  });


  return (
    <>
      <Header />
      <br />
      <div className="container bg-light py-3 px-lg-5">
        <div className="row py-3 my-2">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h3>Please enter your MFA code</h3>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="MFA">MFA</label>
                      <Field
                        component="input"
                        name="mfa"
                        placeholder="6-digit MFA code"
                        className="form-control"
                        type="text"
                      />
                      { hasError ? <span>Invalid MFA code.</span> : null }
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MFAAuth;
