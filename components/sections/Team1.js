'use client'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Team1() {
    return (
        <>
            <section className="team-section section-padding pt-0 section-bg-2" id="team">
                <div className="line-shape">
                    <img src="/assets/img/team/line-shape.png" alt="shape-img" />
                </div>
                <div className="mask-shape">
                    <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Trinzz is Enterprise-Ready</h2>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }} >
                        <div className="team-wrapper">
                            <div className="team-items bor-top wow fadeInUp" data-wow-delay=".3s">
                            <i class="fa-sharp fa-solid fa-square-check" style={{color: '#74C0FC'}}></i>
                                <p>
                                Leverage Trinzz capabilities for accuracy, efficiency and speed, Securely and Scalably
                                </p>
                            </div>
                            <div className="team-items pt-0 wow fadeInUp" data-wow-delay=".5s">
                            <i class="fa-sharp fa-solid fa-square-check" style={{color: '#74C0FC'}}></i>
                                <p>
                                Compliant with SOC2 Type 2 standards
                                </p>
                            </div>
                            <div className="team-items pt-0 wow fadeInUp" data-wow-delay=".7s">
                            <i class="fa-sharp fa-solid fa-square-check" style={{color: '#74C0FC'}}></i>
                                <p>
                                Encryption of all data in transit and at rest ensuring end-to-end security, with SSL
    transport rated A+ by Qualys
                                </p>
                            </div>
                            <div className="team-items pt-0 wow fadeInUp" data-wow-delay=".9s">
                            <i class="fa-sharp fa-solid fa-square-check" style={{color: '#74C0FC'}}></i>
                                <p>
                                Benefit from enterprise-grade infrastructure and regulatory compliance
                                </p>
                            </div>
                            <div className="team-items pt-0 wow fadeInUp" data-wow-delay=".9s">
                            <i class="fa-sharp fa-solid fa-square-check" style={{color: '#74C0FC'}}></i>
                                <p>
                                Ready for scale through Google Cloud Platform and Amazon Web Services
    hosting
                                </p>
                            </div>
                            <div className="team-items pt-0 wow fadeInUp" data-wow-delay=".9s">
                            <i class="fa-sharp fa-solid fa-square-check" style={{color: '#74C0FC'}}></i>
                                <p>
                                Infrastructure compliant with HIPAA, enabling Business Associate Agreements
    execution
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="https://assets-global.website-files.com/5f6bc60e665f54545a1e52a5/645eb70d91a5004db42ae2c7_rf_enterprise_gradient2-p-500.webp" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
