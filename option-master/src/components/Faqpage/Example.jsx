import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <div className="w-[65%] m-auto mx-auto lg:p-[74px]">
        <Fragment>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              className="font-['DM Serif Text', serif;] font-bold lg-text-[23px]"
              onClick={() => handleOpen(1)}
            >
          
              WHERE ARE THE AUCTION PUBLISHED
            </AccordionHeader>
            <AccordionBody className="font-['DM Serif Text', serif] ">
              <span className="font-all">
                {" "}
                Our auctions are published live on the website Bidder  click
                here to view
              </span>
              <br />
              <span className="font-all mt-5">
                {" "}
                We are also available on: <span> Sixbid </span>and <span></span>{" "}
                Numisbids.
              </span>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              className="font-['DM Serif Text', serif;]"
              onClick={() => handleOpen(2)}
            >
              WHAT ARE THE PAYMENT METHODS?
            </AccordionHeader>
            <AccordionBody className="font-['DM Serif Text', serif;]">
              <div className="flex flex-col gap-8">
                <span className="font-all">
                  Our payment options are the following:
                </span>

                <div className="flex flex-col gap-[11px]">
                  <span className="font-all">• Bank transfer </span>

                  <span className="font-all"> • PayPal (+4.5%)</span>
                </div>
                <span> Credit card payments are not accepted.</span>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              className="font-['DM Serif Text', serif;]"
              onClick={() => handleOpen(3)}
            >
              WHAT IS THE COSTS FOR SHIPMENTS?
            </AccordionHeader>
            <AccordionBody className="font-['DM Serif Text', serif;]">
              <div className="flex flex-col gap-[1rem]">
                <span className="font-all">
                  Our payment options are the following:
                </span>

                <div className="flex flex-col gap-[11px]">
                  <h4 className="font-all"> Bpost (Tracked and Registered)</h4>
                  <span className="font-all">• EU: 15 EUR </span>
                  <span className="font-all">• Non-EU: 20 EUR</span>
                  FedEx
                </div>
                <span className="font-all">(International Priority)</span>
                <span className="font-all">• EU: 25 EUR</span>
                <span className="font-all">• Non-EU: 35 EUR</span>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              className="font-['DM Serif Text', serif;]"
              onClick={() => handleOpen(4)}
            >
              ARE THE COINS AUTHENTIC?
            </AccordionHeader>
            <AccordionBody className="font-['DM Serif Text', serif;]">
              All coins we sell are authentic. We offer a lifetime warranty for
              all of the items we sell.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader
              className="font-['DM Serif Text', serif;]"
              onClick={() => handleOpen(5)}
            >
              IS THERE A PARTNER COMPANY?
            </AccordionHeader>
            <AccordionBody className="font-['DM Serif Text', serif;">
              Bucephalus Numismatic doesn't have a partner company.
            </AccordionBody>
          </Accordion>
        </Fragment>


<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />





      </div>
    </>
  );
}
