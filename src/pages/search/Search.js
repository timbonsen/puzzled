import React from "react";
import PageHeader from "../../components/PageHeader";
import LoginHeader from "../../components/LoginHeader";
import {Link} from "react-router-dom";
import './search.css'

function SearchPage() {
    function search() {

    }

    return (
        <>
            <PageHeader title="SEARCH" />
            <div className="pageContainer">
                <div className="pageContent">
                    <LoginHeader />
                    <div className="searchContainer">
                        <div className="searchFilters">
                            <h3>Zoekopdracht</h3>
                            <input
                                type="text"
                                id="search-field"
                                name="search"
                                placeholder="Zoek"
                                onKeyPress={search}
                            />
                            <div className="searchFilterOptions">
                                <h4>MERK</h4>
                                <Link className="searchFilter">KING</Link>
                                <Link className="searchFilter">RAVENSBURGER</Link>
                                <Link className="searchFilter">JUMBO</Link>
                                <Link className="searchFilter">FALCON</Link>
                                <Link className="searchFilter">GOLIATH</Link>
                                <Link className="searchFilter">CASTORLAND</Link>
                                <Link className="searchFilter">CLEMENTONI</Link>
                            </div>
                            <div className="searchFilterOptions">
                                <h4>AANTAL PUZZELSTUKJES</h4>
                                <Link className="searchFilter">25</Link>
                                <Link className="searchFilter">50</Link>
                                <Link className="searchFilter">100</Link>
                                <Link className="searchFilter">250</Link>
                                <Link className="searchFilter">500</Link>
                                <Link className="searchFilter">1000</Link>
                                <Link className="searchFilter">1500</Link>
                                <Link className="searchFilter">2000</Link>
                                <Link className="searchFilter">OVERIG</Link>
                            </div>
                            <div className="searchFilterOptions">
                                <h4>CATEGORIE</h4>
                                <Link className="searchFilter">NATUUR</Link>
                                <Link className="searchFilter">JAN VAN HAASTEREN</Link>
                                <Link className="searchFilter">WASGIJ</Link>
                                <Link className="searchFilter">DISNEY</Link>
                                <Link className="searchFilter">DIEREN</Link>
                                <Link className="searchFilter">STILLEVEN</Link>
                                <Link className="searchFilter">FOTO</Link>
                                <Link className="searchFilter">3D</Link>
                            </div>
                        </div>
                        <div className="searchResults">
                            <h3>zoekresultaten</h3>
                            <p>Voor een zoekopdracht uit</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage;