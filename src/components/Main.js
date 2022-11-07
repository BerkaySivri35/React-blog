function Main() {
    return (
        <div>
            <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="images/3.webp" className="img-fluid carousel " alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="images/1.webp" className="img-fluid carousel" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="images/2.jpg" className="img-fluid carousel" alt="..."/>
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
            </div>
        </div>

            <section className="container-fluid p-5 mt-3">
                <div className="row  py-4 ps-sm-0 ps-md-4 gap-3 d-flex justify-content-center">
                    {/* <!--------------------------------------------Article------------------------------------------------------------------> */}
                    <article className="col-sm-12 col-md-3 mb-sm-4 m-md-3 shadow-lg border-5 border-end border-dark detay">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <img src="images/berkay.png" className="rounded-circle profilePic mt-2" alt=""/>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <h5 className="ms-4 mt-4">Berkay Sivri</h5>
                                <p className="ms-4">Software Dev.</p>
                                <p className="ms-4 mt-2">İzmir</p>
                            </div>
                        </div>
                        <div className="row mt-4 pt-4">
                            <div className="col-12 ">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur maiores aliquid, odit explicabo necessitatibus ipsam nisi et laborum, officiis ratione possimus corporis quidem nulla, architecto provident culpa nam dolores!
                                    Suscipit soluta quod, eius, deserunt consectetur omnis pariatur corrupti fugit expedita nam id necessitatibus libero dolorem iste voluptas. Quasi, recusandae quo voluptate porro quisquam est nisi quidem sequi reiciendis dolore!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 ">
                                <ul className="text-end">
                                    <li className="d-inline-block me-4">
                                        <a className="nav-link" href="#">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="d-inline-block me-5">
                                        <a className="nav-item" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    {/* <!--------------------------------------------Article2------------------------------------------------------------------> */}
                    <article className="col-sm-12 col-md-3  m-md-3 shadow-lg border-5 border-end border-dark detay">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <img src="images/furkan.jpg" className="rounded-circle profilePic mt-2" alt=""/>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <h5 className="ms-4 mt-3">Gökhan Sipahioğlu</h5>
                                <p className="ms-4">Software Dev.</p>
                                <p className="ms-4 mt-2">İstanbul</p>
                            </div>
                        </div>
                        <div className="row mt-4 pt-4">
                            <div className="col-12 ">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur maiores aliquid, odit explicabo necessitatibus ipsam nisi et laborum, officiis ratione possimus corporis quidem nulla, architecto provident culpa nam dolores!
                                    Suscipit soluta quod, eius, deserunt consectetur omnis pariatur corrupti fugit expedita nam id necessitatibus libero dolorem iste voluptas. Quasi, recusandae quo voluptate porro quisquam est nisi quidem sequi reiciendis dolore!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 ">
                                <ul className="text-end">
                                    <li className="d-inline-block me-4">
                                        <a className="nav-link" href="#">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="d-inline-block me-5">
                                        <a className="nav-item" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    {/* <!--------------------------------------------Article3------------------------------------------------------------------> */}
                    <article className="col-sm-12 col-md-3 shadow-lg  border-5 border-end border-dark m-md-3 detay">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <img src="https://picsum.photos/120/120" className="rounded-circle mt-2" alt=""/>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <h5 className="ms-4 mt-3">Ufuk Yetişkin</h5>
                                <p className="ms-4">Software Dev.</p>
                                <p className="ms-4 mt-2">İstanbul</p>
                            </div>
                        </div>
                        <div className="row mt-4 pt-4">
                            <div className="col-12">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur maiores aliquid, odit explicabo necessitatibus ipsam nisi et laborum, officiis ratione possimus corporis quidem nulla, architecto provident culpa nam dolores!
                                    Suscipit soluta quod, eius, deserunt consectetur omnis pariatur corrupti fugit expedita nam id necessitatibus libero dolorem iste voluptas. Quasi, recusandae quo voluptate porro quisquam est nisi quidem sequi reiciendis dolore!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="text-end">
                                    <li className="d-inline-block me-4">
                                        <a className="nav-link" href="#">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-forward-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="d-inline-block me-5">
                                        <a className="nav-item" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="green" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>


    );
}

export default Main;