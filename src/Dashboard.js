import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegStar, } from "react-icons/fa";
import { BiCheckShield, BiHomeAlt, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoIosLogOut, } from "react-icons/io";
import { FiTrash, FiClock, FiSend, FiBookmark, 
        FiSettings, FiUser, FiSearch } from "react-icons/fi";
import Newest from './Images/Untitled.png'
import Promos from './Images/Untitled1.png'
import Fruits from './Images/Untitled2.png'
import Herbs from './Images/Untitled3.png'
import Beverages from './Images/Untitled4.png'
import Music from './Images/Untitled5.png'
import Bakery from './Images/Untitled6.png'
import Toys from './Images/Untitled7.png'
import Electronics from './Images/Untitled8.png'
import Baby from './Images/Untitled9.png'
import Plants from './Images/Untitled10.png'
import Icon from './Images/icon.png'
import Icon1 from './Images/icon1.png'
import Icon2 from './Images/icon2.png'
import Icon3 from './Images/icon3.png'
import Icon4 from './Images/icon4.png'

const style = { color: "gray"}
const day = new Date();
const today = day.getDate();
const month = day.getMonth();
const year = day.getFullYear();

export class Dashboard extends Component {
    render() {
        return (
            <div className='body'>
                <div className='left'>
                    <div className='icons'><BiCheckShield /></div>
                    <div className='icon'><BiHomeAlt /></div>
                    <div className='icon'><FaRegStar /></div>
                    <div className='icon'><FiBookmark /></div>
                    <div className='icon'><FiSend /></div>
                    <div className='icon'><FiClock /></div>
                    <div className='icon'><FiTrash /></div>
                        <div className='Icons'>
                            <div className='iconz'><FiSettings /></div>
                            <div className='iconz'><FiUser /></div>
                            <div className='iconz'><IoIosLogOut /></div>
                        </div>
                </div>
                <div className='middle'>
                    <div className='search'>
                        <div className='box'><FiSearch /><input type='text' placeholder='Search everything...'></input></div>
                        <button>Add new item</button>
                    </div>
                    <div className='categories'>
                        <p>Categoies</p>
                        <p>..</p>
                    </div>
                    <div className='svg'>
                        <div><div><img src={Newest} alt='newest' /></div><p>Newest</p></div>
                        <div><div><img src={Promos} alt='Promo' /></div><p>Promos</p></div>
                        <div><div><img src={Fruits} alt='Fruits' /></div><p>Fruits</p></div>
                        <div><div><img src={Herbs} alt='Herbss' /></div><p>Herbs</p></div>
                        <div><div><img src={Beverages} alt='Beverages' /></div><p>Beverages</p></div>
                        <div><div><img src={Music} alt='Music' /></div><p>Music</p></div>
                        <div><div><img src={Bakery} alt='Bakery' /></div><p>Bakery</p></div>
                        <div><div><img src={Toys} alt='Toys' /></div><p>Toys</p></div>
                        <div><div><img src={Electronics} alt='Electronics' /></div><p>Electronics</p></div>
                        <div><div><img src={Baby} alt='Baby' /></div><p>Baby</p></div>
                        <div><div><img src={Plants} alt='Plants' /></div><p>Plants</p></div>
                    </div>
                    <div className='Profit'>
                        <p>Profitable Items</p>
                        <p>..</p>
                        <p>Sales Statistic</p>
                    </div>
                    <div className='chartbox'>
                        <div className='chartitem1'>
                            <div className='Item'>
                                <div>
                                    <span className='number'>1</span><span>Bakery</span><span className='dollar'>+$12</span>
                                </div>
                                <div>
                                    <span className='number'>2</span><span>Electronics</span><span className='dollars'>-$12</span>
                                </div>
                                <div>
                                    <span className='number'>3</span><span>Plants</span><span className='dollar'>+$12</span>
                                </div>
                                <button>See All Activities</button>
                            </div>
                        </div>
                        <div className='chartitem2'>
                            <div className='chartitem3'>
                                <div className='percent'>
                                    <div>+64%</div>
                                    <div>+40%</div>
                                    <div>-32%</div>
                                    <div>-24%</div>
                                </div>
                                <div className='week'>Week 1</div>
                                <div className='bar'>
                                            <div className="progress-fi">
                                            </div>

                                            <div className="progress">
                                            </div>

                                            <div className="progress-fill">
                                            </div>

                                            <div className="progress-fil">
                                            </div>

                                            <div className="progress-f">
                                            </div>

                                            <div className="progress">
                                            </div>

                                            <div className="progress-fil">
                                            </div>

                                            <div className="progress-fill">
                                            </div>

                                            <div className="progress">
                                            </div>

                                            <div className="progress">
                                            </div>

                                            <div className="progress-fi">
                                            </div>

                                            <div className="progress-fil">
                                            </div>

                                            <div className="progress-fill">
                                            </div>

                                            <div className="progress-f">
                                            </div>

                                            <div className="progress-fil">
                                            </div>

                                            <div className="progress">
                                            </div>
                                    </div>
                                </div>
                            <div className='chartitem4'>
                                <div className='percent'>
                                    <div>+32%</div>
                                    <div>-24%</div>
                                    <div>-32%</div>
                                    <div>-40%</div>
                                </div>
                                <div className='week'>Week 2</div>
                                <div className='bar'>
                                    <div className="progress-fi">
                                    </div>

                                    <div className="progress">
                                    </div>

                                    <div className="progress-fill">
                                    </div>

                                    <div className="progress-fil">
                                    </div>

                                    <div className="progress-f">
                                    </div>

                                    <div className="progress">
                                    </div>

                                    <div className="progress-fil">
                                    </div>

                                    <div className="progress-fill">
                                    </div>

                                    <div className="progress">
                                    </div>

                                    <div className="progress">
                                    </div>

                                    <div className="progress-fi">
                                    </div>

                                    <div className="progress-fil">
                                    </div>

                                    <div className="progress-fill">
                                    </div>

                                    <div className="progress-f">
                                    </div>

                                    <div className="progress-fil">
                                    </div>

                                    <div className="progress">
                                    </div>
                                    </div>
                                </div>
                            <div className='chartitem5'>
                                <div className='item'>1 2 3 4 5 6 7 </div>
                                <div className='item'>1 2 3 4 5 6 7 </div>
                            </div>
                        </div>
                    </div>
                    <div className='title'>
                        <div className='products'>All Products</div>
                        <div className='products1'>Ordered</div>
                        <div className='products2'>Returned</div>
                    </div>
                    <div className='table'>
                        <div className='radio'>
                            <div><input type='checkbox'></input></div>
                            <div><input type='checkbox'></input></div>
                            <div><input type='checkbox'></input></div>
                            <div><input type='checkbox'></input></div>
                            <div><input type='checkbox'></input></div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Product's Name</td>
                                    <td>Variant</td>
                                    <td>Stock</td>
                                    <td>Price</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <td>Sony 1000Xm3</td>
                                    <td>Black</td>
                                    <td>1.300 Items</td>
                                    <td>$800</td>
                                    <td>
                                        <div className='canceled'>CANCELED</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Iphone 11 Pro</td>
                                    <td>Gray </td>
                                    <td>2.484 Itms</td>
                                    <td>$1200</td>
                                    <td>
                                        <div className='completed'>COMPLETED</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Redmi Note 9 Pro</td>
                                    <td>Blue</td>
                                    <td>1.240 Items</td>
                                    <td>$300</td>
                                    <td>
                                        <div className='canceled'>CANCELED</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>jbi T110</td>
                                    <td>White</td>
                                    <td>2.340 Items</td>
                                    <td>$100</td>
                                    <td>
                                        <div className='completed'>COMPLETED</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='right'>
                    <div className='right1'>
                        <div className='Title'>
                            <span>Overview</span>
                            <BiDotsHorizontalRounded style={style} />
                        </div>
                        <div className='overview'>
                            <div className='overview1'>
                                <div className='over1'></div>
                                <div className='over2'></div>
                            </div>
                            <div className='overview2'>
                                <span>17 Total Items</span>
                                <span>View Details</span>
                            </div>
                        </div>
                        <div className='over'>
                            <div className='overview1'>
                                <div className='over1'></div>
                                <div className='over2'></div>
                            </div>
                            <div className='overview2'>
                                <span>8 Total Items</span>
                                <span>View Details</span>
                            </div>
                        </div>
                    </div>
                    <div className='right2'>
                        <div className='Title'>
                            <span>Latest Activities</span>
                            <BiDotsHorizontalRounded style={style} />
                        </div>
                        <div className='Latest'>
                            <div className='Sony'>
                                <div className='sales-icon'>
                                    <img src={Icon4} alt='icon' />
                                </div>
                                <div className='sales-middle'>
                                    <div>Infinix Hot 9</div>
                                    <div className='id'>{today} {month} {year}</div>
                                </div>
                                <div className='sales-last'>- $ 160</div>
                            </div>
                            <div className='Iphone'>
                                <div className='sales-icon'>
                                    <img src={Icon3} alt='icon' />
                                </div>
                                <div className='sales-middle'>
                                    <div>Infinix Hot 9</div>
                                    <div className='id'>{today} {month} {year}</div>
                                </div>
                                <div className='sales-lastt'>+ $ 160 </div>
                            </div>
                            <div>
                                <button>See All Activities</button>
                            </div>
                        </div>
                    </div>
                    <div className='right3'>
                        <div className='Title'>
                            <span>Sales Lists</span>
                            <BiDotsHorizontalRounded style={style} />
                        </div>
                        <div className='Sales'>
                            <div className='sales-icon'>
                                <img src={Icon2} alt='icon' />
                            </div>
                            <div className='Name-id'>
                                <div>Marjari Melani</div>
                                <div className='id'>ID: 22548758123</div>
                            </div>
                        </div>
                        <div className='Sales'>
                            <div className='sales-icon'>
                                <img src={Icon1} alt='icon' />
                            </div>
                            <div className='Name-id'>
                                <div>Marjari Melani</div>
                                <div className='id'>ID: 22548758123</div>
                            </div>
                        </div>
                        <div className='Sales'>
                            <div className='sales-icon'>
                                <img src={Icon} alt='icon' />
                            </div>
                            <div className='Name-id'>
                                <div>Parjo Melani</div>
                                <div className='id'>ID: 22548758123</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard;