import React from 'react'

export default function Home() {
    return (
        <div>
            <section id="hero" className="hero">

                <div className="info d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 data-aos="fade-down">Welcome to <span>UpConstruction</span></h2>
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

                    <div className="carousel-item active" style={{ backgroundImage: `url(assets/img/hero-carousel/hero-carousel-1.jpg)` }}></div>
                    <div className="carousel-item" style={{ backgroundImage: `url(assets/img/hero-carousel/hero-carousel-2.jpg)` }}></div>
                    <div className="carousel-item" style={{ backgroundImage: `url(assets/img/hero-carousel/hero-carousel-3.jpg)` }}></div>
                    <div className="carousel-item" style={{ backgroundImage: `url(assets/img/hero-carousel/hero-carousel-4.jpg)` }}></div>
                    <div className="carousel-item" style={{ backgroundImage: `url(assets/img/hero-carousel/hero-carousel-5.jpg)` }}></div>

                    <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>

            </section>

            <main id="main">

                <section id="get-started" className="get-started section-bg">
                    <div className="container">

                        <div className="row justify-content-between gy-4">

                            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                                <div className="content">
                                    <h3>Minus hic non reiciendis ea possimus at quia.</h3>
                                    <p>Rem id rerum. Debitis deserunt quidem delectus expedita ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi possimus ut delectus dicta.</p>
                                    <p>Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit eligendi labore culpa eos. Deserunt porro magni qui necessitatibus dolorem at animi cupiditate.</p>
                                </div>
                            </div>

                            <div className="col-lg-5" data-aos="fade">
                                <form action="forms/quote.php" method="post" className="php-email-form">
                                    <h3>Get a quote</h3>
                                    <p>Vel nobis odio laboriosam et hic voluptatem. Inventore vitae totam. Rerum repellendus enim linead sero park flows.</p>
                                    <div className="row gy-3">

                                        <div className="col-md-12">
                                            <input type="text" name="name" className="form-control" placeholder="Name" required />
                                        </div>

                                        <div className="col-md-12 ">
                                            <input type="email" className="form-control" name="email" placeholder="Email" required />
                                        </div>

                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                                        </div>

                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                        </div>

                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>

                                            <button type="submit">Get a quote</button>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="constructions" className="constructions">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Constructions</h2>
                            <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
                        </div>

                        <div className="row gy-4">

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="card-bg" style={{ backgroundImage: `url(assets/img/constructions-1.jpg)` }}></div>
                                        </div>
                                        <div className="col-xl-7 d-flex align-items-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                                                <p>Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo magnam. Dolor eos et.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="card-bg" style={{ backgroundImage: `url(assets/img/constructions-2.jpg)` }}></div>
                                        </div>
                                        <div className="col-xl-7 d-flex align-items-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                                                <p>Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto. Est laudantium sunt at quas aut hic. Eum dignissimos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="card-bg" style={{ backgroundImage: `url(assets/img/constructions-3.jpg)` }}></div>
                                        </div>
                                        <div className="col-xl-7 d-flex align-items-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Error beatae dolor inventore aut</h4>
                                                <p>Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto officia laboriosam odit. Ut sunt temporibus nulla culpa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-5">
                                            <div className="card-bg" style={{ backgroundImage: `url(assets/img/constructions-4.jpg)` }}></div>
                                        </div>
                                        <div className="col-xl-7 d-flex align-items-center">
                                            <div className="card-body">
                                                <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                                                <p>Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et sint ratione dolores. Aut aliquid ea dolores libero nobis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Services</h2>
                            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
                        </div>

                        <div className="row gy-4">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item  position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-mountain-city"></i>
                                    </div>
                                    <h3>Nesciunt Mete</h3>
                                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                                    </div>
                                    <h3>Eosle Commodi</h3>
                                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-compass-drafting"></i>
                                    </div>
                                    <h3>Ledo Markt</h3>
                                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-trowel-bricks"></i>
                                    </div>
                                    <h3>Asperiores Commodit</h3>
                                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-helmet-safety"></i>
                                    </div>
                                    <h3>Velit Doloremque</h3>
                                    <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                                    </div>
                                    <h3>Dolori Architecto</h3>
                                    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                                    <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="alt-services" className="alt-services">
                    <div className="container" data-aos="fade-up">

                        <div className="row justify-content-around gy-4">
                            <div className="col-lg-6 img-bg" style={{ backgroundImage: `url(assets/img/alt-services.jpg)` }} data-aos="zoom-in" data-aos-delay="100"></div>

                            <div className="col-lg-5 d-flex flex-column justify-content-center">
                                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                                    <i className="bi bi-easel flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-patch-check flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Dine Pad</a></h4>
                                        <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                                    </div>
                                </div>

                                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-brightness-high flex-shrink-0"></i>
                                    <div>
                                        <h4><a href="" className="stretched-link">Tride clov</a></h4>
                                        <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section id="features" className="features section-bg">
                    <div className="container" data-aos="fade-up">

                        <ul className="nav nav-tabs row  g-2 d-flex">

                            <li className="nav-item col-3">
                                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                    <h4>Modisit</h4>
                                </a>
                            </li>

                            <li className="nav-item col-3">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                    <h4>Praesenti</h4>
                                </a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                    <h4>Explica</h4>
                                </a>
                            </li>

                            <li className="nav-item col-3">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                    <h4>Nostrum</h4>
                                </a>
                            </li>

                        </ul>

                        <div className="tab-content">

                            <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                        <h3>Voluptatem dignissimos provident</h3>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                                        <img src="assets/img/features-1.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-2">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                        <h3>Neque exercitationem debitis</h3>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/features-2.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                        <h3>Voluptatibus commodi accusamu</h3>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                        </ul>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/features-3.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-4">
                                <div className="row">
                                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                        <h3>Omnis fugiat ea explicabo sunt</h3>
                                        <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                            <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                                        <img src="assets/img/features-4.jpg" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                <section id="projects" class="projects">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <h2>Our Projects</h2>
                            <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
                        </div>

                        <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

                            <ul class="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-remodeling">Remodeling</li>
                                <li data-filter=".filter-construction">Construction</li>
                                <li data-filter=".filter-repairs">Repairs</li>
                                <li data-filter=".filter-design">Design</li>
                            </ul>

                            <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

                                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/remodeling-1.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Remodeling 1</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/construction-1.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Construction 1</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/construction-1.jpg" title="Construction 1" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/repairs-1.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Repairs 1</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/design-1.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Design 1</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/design-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/remodeling-2.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Remodeling 2</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/remodeling-2.jpg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/construction-2.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Construction 2</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/construction-2.jpg" title="Construction 2" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/repairs-2.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Repairs 2</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/design-2.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Design 2</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/design-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/remodeling-3.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Remodeling 3</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/construction-3.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Construction 3</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/construction-3.jpg" title="Construction 3" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/repairs-3.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Repairs 3</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/repairs-3.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                                    <div class="portfolio-content h-100">
                                        <img src="assets/img/projects/design-3.jpg" class="img-fluid" alt=""/>
                                            <div class="portfolio-info">
                                                <h4>Design 3</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                                <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                                <a href="project-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                                            </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
                <section id="testimonials" class="testimonials section-bg">
                    <div class="container" data-aos="fade-up">

                        <div class="section-header">
                            <h2>Testimonials</h2>
                            <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
                        </div>

                        <div class="slides-2 swiper">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""/>
                                                <h3>Saul Goodman</h3>
                                                <h4>Ceo &amp; Founder</h4>
                                                <div class="stars">
                                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                                </div>
                                                <p>
                                                    <i class="bi bi-quote quote-icon-left"></i>
                                                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                    <i class="bi bi-quote quote-icon-right"></i>
                                                </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""/>
                                                <h3>Sara Wilsson</h3>
                                                <h4>Designer</h4>
                                                <div class="stars">
                                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                                </div>
                                                <p>
                                                    <i class="bi bi-quote quote-icon-left"></i>
                                                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                    <i class="bi bi-quote quote-icon-right"></i>
                                                </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""/>
                                                <h3>Jena Karlis</h3>
                                                <h4>Store Owner</h4>
                                                <div class="stars">
                                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                                </div>
                                                <p>
                                                    <i class="bi bi-quote quote-icon-left"></i>
                                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                    <i class="bi bi-quote quote-icon-right"></i>
                                                </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""/>
                                                <h3>Matt Brandon</h3>
                                                <h4>Freelancer</h4>
                                                <div class="stars">
                                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                                </div>
                                                <p>
                                                    <i class="bi bi-quote quote-icon-left"></i>
                                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                    <i class="bi bi-quote quote-icon-right"></i>
                                                </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="swiper-slide">
                                    <div class="testimonial-wrap">
                                        <div class="testimonial-item">
                                            <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""/>
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                                <div class="stars">
                                                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                                                </div>
                                                <p>
                                                    <i class="bi bi-quote quote-icon-left"></i>
                                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                    <i class="bi bi-quote quote-icon-right"></i>
                                                </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-pagination"></div>
                        </div>

                    </div>
                </section>
                <section id="recent-blog-posts" class="recent-blog-posts">
                    <div class="container" data-aos="fade-up">
                        <div class=" section-header">
                            <h2>Recent Blog Posts</h2>
                            <p>In commodi voluptatem excepturi quaerat nihil error autem voluptate ut et officia consequuntu</p>
                        </div>

                        <div class="row gy-5">

                            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="post-item position-relative h-100">

                                    <div class="post-img position-relative overflow-hidden">
                                        <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt=""/>
                                            <span class="post-date">December 12</span>
                                    </div>

                                    <div class="post-content d-flex flex-column">

                                        <h3 class="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>

                                        <div class="meta d-flex align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-person"></i> <span class="ps-2">Julia Parker</span>
                                            </div>
                                            <span class="px-3 text-black-50">/</span>
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-folder2"></i> <span class="ps-2">Politics</span>
                                            </div>
                                        </div>

                                        <hr/>

                                            <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i
                                                class="bi bi-arrow-right"></i></a>

                                    </div>

                                </div>
                            </div>

                            <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div class="post-item position-relative h-100">

                                    <div class="post-img position-relative overflow-hidden">
                                        <img src="assets/img/blog/blog-2.jpg" class="img-fluid" alt=""/>
                                            <span class="post-date">July 17</span>
                                    </div>

                                    <div class="post-content d-flex flex-column">

                                        <h3 class="post-title">Et repellendus molestiae qui est sed omnis</h3>

                                        <div class="meta d-flex align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-person"></i> <span class="ps-2">Mario Douglas</span>
                                            </div>
                                            <span class="px-3 text-black-50">/</span>
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-folder2"></i> <span class="ps-2">Sports</span>
                                            </div>
                                        </div>

                                        <hr/>

                                            <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i
                                                class="bi bi-arrow-right"></i></a>

                                    </div>

                                </div>
                            </div>

                            <div class="col-xl-4 col-md-6">
                                <div class="post-item position-relative h-100" data-aos="fade-up" data-aos-delay="300">

                                    <div class="post-img position-relative overflow-hidden">
                                        <img src="assets/img/blog/blog-3.jpg" class="img-fluid" alt=""/>
                                            <span class="post-date">September 05</span>
                                    </div>

                                    <div class="post-content d-flex flex-column">

                                        <h3 class="post-title">Quia assumenda est et veritati tirana ploder</h3>

                                        <div class="meta d-flex align-items-center">
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-person"></i> <span class="ps-2">Lisa Hunter</span>
                                            </div>
                                            <span class="px-3 text-black-50">/</span>
                                            <div class="d-flex align-items-center">
                                                <i class="bi bi-folder2"></i> <span class="ps-2">Economics</span>
                                            </div>
                                        </div>

                                        <hr/>

                                            <a href="blog-details.html" class="readmore stretched-link"><span>Read More</span><i
                                                class="bi bi-arrow-right"></i></a>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}
