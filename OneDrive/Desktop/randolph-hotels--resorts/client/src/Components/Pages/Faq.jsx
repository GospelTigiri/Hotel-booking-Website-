import React from "react";

const Faq = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center">Frequently Asked Questions</h1>

            <div className="accordion" id="faqAccordion">
                {/* Q1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            How do I book a room?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            You can book directly from our <a href="/rooms">Rooms</a> page or by contacting us via phone/email.
                        </div>
                    </div>
                </div>

                {/* Q2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            What are the check-in and check-out times?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Check-in starts at 2:00 PM and check-out is at 12:00 PM.
                        </div>
                    </div>
                </div>

                {/* Q3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            Do you offer airport pickup services?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                            Yes, we offer airport pickup on request. Please contact support to schedule.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
