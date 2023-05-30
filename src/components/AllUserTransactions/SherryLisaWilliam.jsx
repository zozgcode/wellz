import React from "react";

export default function SherryLisaWilliam() {
  return (
    <div className="transaction-history">
      <div className="transaction-history-header">
        <p>LAST TRANSACTIONS</p>
        <div className="transaction-history-header-right">
          <p>
            <svg
              width="12"
              height="9"
              viewBox="0 0 18 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.63605 0.244781L17.3841 8.62065L8.22768 8.7214L0.379285 8.80775L9.63605 0.244781Z"
                fill="#1CBD19"
              />
            </svg>
            &nbsp; $8,000.00
          </p>
          <p>
            <svg
              width="12"
              height="9"
              viewBox="0 0 17 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.74643 8.56L-1.8195e-05 0.185913L9.15384 0.0857985L17 -1.39723e-05L7.74643 8.56Z"
                fill="#A11C1C"
              />
            </svg>
            &nbsp; $-261.81
          </p>
        </div>
      </div>
      <div className="transaction">
        <div className="transaction_box transaction_boxxx">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/212536mhy/deb <p>23/5/2023</p>
            </span>
            <span>-$1,000.00</span>
          </div>
        </div>
        <div className="transaction_box">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/22456mhy/deb<p>25/4/2023</p>
            </span>
            <span>-$1,000.00</span>
          </div>
        </div>
        <div className="transaction_box transaction_boxxx">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/85256mhy/deb <p>1/3/2023</p>
            </span>
            <span className="green">+$825,000.00</span>
          </div>
        </div>
        <div className="transaction_box">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/07536mhy/deb <p>10/2/2023</p>
            </span>
            <span className="green">+$2,000,000.00</span>
          </div>
        </div>
        <div className="transaction_box transaction_boxxx">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/262536mhy/deb <p>4/1/2023</p>
            </span>
            <span className="green">+$750,000.00</span>
          </div>
        </div>
        <div className="transaction_box">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/22446mhy/deb <p>10/12/2022</p>
            </span>
            <span className="green">+$575,000.00</span>
          </div>
          {/* <div className="transaction_box-bottom">
                    <span>14/6/2011</span>
                    <div>
                      <span>$1,500.00</span>
                    </div>
                    
                  </div> */}
        </div>
        <div className="transaction_box transaction_boxxx">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/13456mhy/deb <p>10/05/2022</p>
            </span>
            <span className="green">+$1,750,000.00</span>
          </div>
          {/* <div className="transaction_box-bottom">
                    <span>13/5/2011</span>
                  </div> */}
        </div>
        <div className="transaction_box">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/20156mhy/deb <p>20/03/2022</p>
            </span>
            <span className="green">+$2,350,000.00</span>
          </div>
        </div>
        <div className="transaction_box transaction_boxxx">
          <div className="transaction_box-top">
            <span className="_desc">
              tx/32489mhy/deb <p>13/01/2022</p>
            </span>
            <span className="green">+$1,750,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
