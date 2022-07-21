const faqsLists = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'CAN I ORDER BY PHONE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "\u003cp\u003eSure! We'd be happy to take your order by phone! U.S. customers can call us toll free at 1-888-THE-PROM (843-7766), or International customers can call at 302-279-1052. \u003c/p\u003e",
      },
    },

    {
      '@type': 'Question',
      name: 'WHAT DOES "DUE TO SHIP" MEAN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eItems marked as "Due to Ship" need to be specially ordered from the manufacturer. Based on the latest update from the designer, this item will be available to ship on the date provided. Please consider this date plus the shipping time of your selected shipping method to ensure the dress will arrive in time for your event.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'DO YOU HAVE A CATALOG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eQuinceGirl does not offer a catalog. All of our styles can be viewed and ordered on our website.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'WHAT ARE THE LENGTHS OF YOUR DRESSES?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eThe length of our dresses can be found on most product detail pages. Most of our long dresses are 57"-60" in length (unless otherwise specified). Most of our short dresses are 27"-33" in length (unless otherwise specified).\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'WHAT IS THE FABRIC OF YOUR DRESSES?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eMost product pages list the fabric of that particular dress. If you need information that is not listed on the product page, please contact us.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'DO YOUR PRODUCTS RUN TRUE TO SIZE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eEach dress is made differently, so please check the size chart on the dress page that you are looking at for accurate sizing information. For advice on how to measure, please view this sizing video.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'DOES QUINCEGIRL HAVE A STORE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eQuinceGirl.com is online ONLY! While we may open a store in the future, all of our dresses are available here on the website. Please feel free to call or send us a note with any product questions and we’ll get back to you ASAP!\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'HOW DO I TELL IF A DRESS IS IN STOCK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eSimply choose your size and color on the dress page. If the dress is in our warehouse, you will see a message that says "In Stock: Ships next business day!"\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'WHERE CAN I FIND THE SIZE CHART?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eSize charts vary for individual products and can be found by clicking "What size am I?" next to the size selection drop down menu on the product page.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'DO YOU SHIP OUTSIDE THE US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eWe ship to almost anywhere in the world! If your country is not listed on the drop down menu for country in our checkout, please contact us for help.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'WHAT ARE THE SHIPPING OPTIONS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eWe have many shipping options for both domestic and international. View all our shipping options here!\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'WHAT IF MY BILLING AND SHIPPING ADDRESSES ARE DIFFERENT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eIf your billing and shipping addresses are different, you may still place your order. However, your order may be flagged for review by our fraud prevention department, causing a delay with the processing of your order.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'HOW LONG WILL IT TAKE TO GET MY PACKAGE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eIf your dress is in stock, it will ship out within 1 business day and will arrive to you in accordance with your chosen shipping method. If your dress is not in stock, please consider the ship date provided when choosing your size/color combination on the product page plus the shipping time of your chosen shipping method.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'WHAT FORMS OF PAYMENT DO YOU ACCEPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eWe accept Visa, MasterCard, Discover, American Express, Money Order, AfterPay, and PayPal. You can pay via checking account using PayPal. Get more information on payment options.\u003c/p\u003e',
      },
    },

    {
      '@type': 'Question',
      name: 'WHAT IS YOUR RETURN POLICY?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '\u003cp\u003eWe hope you love your purchase, but if you are not satisfied, we accept returns for a refund. Final Sale items cannot be returned or exchanged. An RA# must be requested and the package shipped to us within 7 days of receipt of item. Packages without an RA # or outside 7 days will be denied and/or refused.\u003cbr/\u003e\u003cbr/\u003eAll non-special order returns are charged a $8.95 handling fee per item. A prepaid shipping label* is included in this fee and can be requested at time of return authorization request. You may also use your own label using any other trackable method.\u003cbr/\u003e\u003cbr/\u003e*Continental US only (Does not include P.O. Box addresses). All international customers are responsible to pay any and all fees when shipping back an item. (Duties, taxes, brokerage fees, etc.)\u003c/p\u003e',
      },
    },
  ],
};
export function Faqs() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-[26px] lg:text-[31px] font-tenor text-center mt-[10px] mb-[120px]">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="overflow-hidden flex">
        <div className="m-auto max-w-[70%]">
          {faqsLists.mainEntity.map((item, key) => (
            <Item q={item.name} a={item.acceptedAnswer.text} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Item = ({q, a}) => (
  <div className="relative overflow-hidden mt-6">
    <input
      type="checkbox"
      className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
    />
    <div className="h-12 w-full pl-5 flex items-center">
      <h1>{q}</h1>
    </div>
    <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
    <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
      <div className="p-5 border-t">{a.replace('<p>', '').replace('</p>', '')}</div>
    </div>
  </div>
);
