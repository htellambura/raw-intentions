import React from "react";
import Dropdown from "../../components/Dropdown";
import "./Information.css";

const FAQ = () => {
  return (
    <div className="information faq">
      <div className="faq-content">
        <div className="title">
          <h1 id="faq-title">FAQ</h1>
        </div>
        <section>
          <div className="info-pg">
            <h2 id="title-1">Materials</h2>
            <div className="faq-question">
              <Dropdown>
                <h3>What types of materials do you use?</h3>
                <p>
                  We use metals, stones and beads in our jewelry; some things to
                  consider:
                </p>
                <ul>
                  <li>All metals are nickel free and hypo-allergenic.</li>
                  <li>
                    We use various types of stones (raw, tumbled, and
                    semi-precious) and nothing is plastic!
                  </li>
                  <li>
                    As for beads, we use glass beads, stone beads, and some
                    wooden beads.
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
          <br />
          <div className="info-pg">
            <h2 id="title-2">Orders</h2>
            <div className="faq-question">
              <Dropdown>
                <h3>How does the ordering process work?</h3>
                <ol>
                  <li>Add your super cool jewelry to your cart</li>
                  <li>
                    Start the checkout process
                    <ul>
                      <li>
                        If you’re in Canada, you can choose to e-transfer. Once
                        your order is placed you will receive an email with your
                        order number and the email for e-transfer.
                      </li>
                      <li>
                        If you are outside of Canada, you will have the option
                        to use Paypal.
                      </li>
                    </ul>
                  </li>
                </ol>
              </Dropdown>
            </div>
          </div>
          <br />
          <div className="info-pg">
            <h2 id="title-3">Shipping & Tracking</h2>
            <div className="faq-question">
              <Dropdown>
                <h3>How long does shipping take?</h3>
                <p>
                  Within Canada, standard shipping takes between 7-14 business
                  days. International orders can vary by location.
                </p>
              </Dropdown>
            </div>
            <div className="faq-question">
              <Dropdown>
                <h3>How much does shipping cost?</h3>
                <p>
                  All standard Canadian shipping is $4. If you are interested in
                  expedited shipping, send us a message! International shipping
                  varies (includes duties, customs…) and will be disclosed in
                  your payment email.
                </p>
              </Dropdown>
            </div>
            <div className="faq-question">
              <Dropdown>
                <h3>Can I track my package?</h3>
                <p>To keep shipping rates low, packages are sent untracked.</p>
              </Dropdown>
            </div>
          </div>
          <div className="info-pg">
            <h2 id="title-4">Refunds & Returns</h2>
            <div className="faq-question">
              <Dropdown>
                <h3>Do you offer returns or exchanges?</h3>
                <p>
                  Currently, we are not offering refunds or returns. However, we
                  understand mishaps happen, if you have any concerns, please
                  contact us.
                </p>
              </Dropdown>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
