import moment from "moment";
const CertificateDesign = ({ certificateData }) => {
  const certificate = certificateData;

  return (
    <div className="certificate-container w-[842px] h-[595px] relative p-[5%_6%_4%]">
      <div className="relative">
        <div className="logo-container w-[30%] float-left">
          <img
            src="/images/certificate/logo.png"
            alt="logo"
            className="max-w-[60%]"
          />
        </div>
        <div className="title-container w-2/5 float-left pt-14">
          <img src="/images/certificate/cirtificate_img.png" alt="title" />
        </div>
        <div className="ref-container w-[30%] flot-right text-right font-bold">
          <div className="ref-text">
            Ref:
            <span>
              {" "}
              {certificate?.xcus}/{certificate?.id}{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="clear-both relative text-center">
        <p className="certificate-title text-[32px] text-[#231f20] pt-[10px] pb-[3%]">
          This Certificate is Proudly Presented to
        </p>
        <div className="recipient-name">
          {certificate?.edustudent?.xstuname}
        </div>
        <p className="certificate-description">
          Has Successfully Completed the Requirements to be Recognized as a
          FUTURE IT &amp; LANGUAGE TRAINING INSTITUTE Certified in{" "}
          <span
            dangerouslySetInnerHTML={{ __html: certificate?.seitem?.xdesc }}
          />{" "}
          and having found Competent.
        </p>
      </div>

      <div className="flex justify-between items-end pt-[6%] relative clear-both">
        <div className="issue-date float-left pl-[2%] pt-[26px]">
          <div className="issue-label">Date of Issue:</div>
          <div className="date">{moment().format("DD-MM-YYYY")}</div>
        </div>
        <div className="signature">
          <img
            src="/images/certificate/author.png"
            alt="author"
            className="w-[60px] h-[60px] m-auto relative left-0 top-[13px]"
          />
          <p className="signature-label w-[135px]">Authorized signature</p>
        </div>
        <div className="w-[20%] float-left text-right pt-[18px]">
          <img
            src="/images/certificate/logo_digital_bangladesh.png"
            alt="Digital Bangladesh"
          />
        </div>
        <div className="certified-logo w-[20%] float-left text-right self-center relative top-[20px]">
          <img
            src="/images/certificate/cirtified.png"
            alt="Certified"
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateDesign;