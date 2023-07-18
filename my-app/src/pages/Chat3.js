import { Link } from 'react-router-dom';

export default function Chat3() {
  return (
    <div class="home">
      <br></br>
      <div>
        <h1>Chats</h1>
      </div>

      <div class="row">
        <div class="col-sm-3">
          <div class="col-sm-8" style={{ margin: '2em 0em 0em 0em' }}>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Individual
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Link
                      to="/chat1"
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        marginLeft: '2em',
                      }}
                    >
                      Favourites
                    </Link>
                    <br></br>
                    <br></br>
                    <Link
                      to="/chat2"
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        marginLeft: '2em',
                      }}
                    >
                      Chats
                    </Link>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Group
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Link
                      to="/chat3"
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        marginLeft: '2em',
                      }}
                    >
                      Favorite
                    </Link>
                    <br></br>
                    <br></br>
                    <Link
                      to="/chat4"
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        marginLeft: '2em',
                      }}
                    >
                      Chats
                    </Link>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Interests
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Link
                      to="/chat5"
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        marginLeft: '2em',
                      }}
                    >
                      Golf
                    </Link>
                    <br></br>
                    <br></br>
                    <Link
                      to="/chat6"
                      style={{
                        textDecoration: 'none',
                        color: 'grey',
                        marginLeft: '2em',
                      }}
                    >
                      Pub Nights
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col-sm-5">
              <div class="barbers">
                <div class="col">
                  <div class="col-sm-5 ">
                    <div class="card">
                      <div class="card-body ss">
                        <dv>
                          <p class="card-title">
                            {' '}
                            <img
                              src="/uidesign/golfgroup.png"
                              alt="bug"
                              height="50px"
                              width="50px"
                            />
                            &nbsp;&nbsp; &nbsp;Tuesday Golf Nights
                          </p>
                          <br></br>
                          <p class="card-text">
                            <small class="text-muted">
                              <img
                                src="/uidesign/person4.png"
                                alt="bug"
                                height="30px"
                                width="30px"
                              />{' '}
                              &nbsp;&nbsp; &nbsp;come tmr if it's not raining
                              <p></p>
                              <img
                                src="/uidesign/person2.png"
                                alt="bug"
                                height="30px"
                                width="30px"
                              />{' '}
                              &nbsp;&nbsp; &nbsp;!!golf is fun
                              <p></p>
                              <input
                                type="text"
                                placeholder="Send Message"
                                size="29"
                              ></input>
                              &nbsp;
                              <Link to="/chat">
                                <img
                                  src="/uidesign/send.png"
                                  class="search"
                                  alt=" "
                                />
                              </Link>
                            </small>
                          </p>
                        </dv>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>

                <br></br>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="col">
                <div class="col-sm-5">
                  <div class="card">
                    <div class="card-body ss">
                      <dv>
                        <p class="card-title">
                          {' '}
                          <img
                            src="/uidesign/scenerygroup.png"
                            alt="bug"
                            height="50px"
                            width="50px"
                          />
                          &nbsp;&nbsp;&nbsp; Austin Blvd Group
                        </p>
                        <br></br>
                        <p class="card-text">
                          <small class="text-muted">
                            <img
                              src="/uidesign/person2.png"
                              alt="bug"
                              height="30px"
                              width="30px"
                            />
                            &nbsp;&nbsp; Theres a BBQ happening at Coles
                            <p></p>
                            <img
                              src="/uidesign/person1.png"
                              alt="bug"
                              height="30px"
                              width="30px"
                            />
                            &nbsp;&nbsp; who's going?
                            <p></p>
                            <input
                              type="text"
                              placeholder="Send Message"
                              size="29"
                            ></input>
                            &nbsp;
                            <Link to="/chat">
                              <img
                                src="/uidesign/send.png"
                                class="search"
                                alt=" "
                              />
                            </Link>
                          </small>
                        </p>
                      </dv>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        <p></p>
        <p></p>
        <Link to="/find">
          <button class="ntb findbtn" type="submit">
            Find New Chats
          </button>
        </Link>
      </div>
    </div>
  );
}
