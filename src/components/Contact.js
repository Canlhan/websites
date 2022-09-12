import React from 'react'


const Contact = () => {

  return (
    <div className="contact-us-area">
            <div className="container">
              <div className="row">
                <div className="contact col-12 p-0">
                  <div className="col-xl-6 col-lg-6 col-md-12 p-0">
                    <div className="contact-info">
                      <h2>Get in touch</h2>
                      <p>
                        Far far away behind the word mountains far from the
                        countries Vokalia and Consonantia there live the blind
                        texts.
                      </p>
                      <div className="contact-text">
                        <h3 className="contact-title">Bergama Şube</h3>
                        <ul>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#"> 0532 290 80 35</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                            <a href="#">bilgievar@gmail.com</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Eren Güngör Sk. No:15 Yenikent/Bergama</a>
                          </li>
                        </ul>
                      </div>
                      <div className="contact-text">
                        <h3 className="contact-title">AliAğa Şube</h3>
                        <ul>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#">0532 290 80 35</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                            <a href="#">bilgievar@gmail.com</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Kurtuluş Mh. Fevzi Paşa Cd. No:81/B Aliağa</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 p-0">
                    <div className="contact-form-area">
                      <form
                        id="contact-form"
                        action="assets/mail-php/mail.php"
                        method="post"
                      >
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="telephone"
                              type="text"
                              placeholder="İsmin"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="email"
                              type="email"
                              placeholder="Email Adresin"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="your Subject"
                              type="text"
                              placeholder="Konu"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <textarea
                              name="message"
                              placeholder="Mesajın"
                            ></textarea>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <button className="submit" type="submit">
                              Mesaj Gönder
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Contact