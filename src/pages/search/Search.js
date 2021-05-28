import React, {useEffect, useState} from "react";
import PageHeader from "../../components/headers/PageHeader";
import LoginHeader from "../../components/headers/LoginHeader";
import './search.css'
import DataListBrands from "../../components/datalists/DataListBrands";
import DataListNumberOfPieces from "../../components/datalists/DataListNumberOfPieces";
import DataListTags from "../../components/datalists/DataListTags";
import DisplayPuzzles from "../../components/functions/DisplayPuzzles";
import {useForm} from "react-hook-form";

function SearchPage() {

    const { handleSubmit, register } = useForm();
    const [searchFilter, setSearchFilter] = useState("none");
    const [searchValue, setSearchValue] = useState("all");
    const [searchTicker, setSearchTicker] = useState(0);
    const [searchResult, setSearchResult] = useState(null);

    function onSubmit(data) {
        console.log(data);
        data.searchValue = data.searchValue.toLowerCase()
        setSearchValue(data.searchValue);
        setSearchTicker(searchTicker + 1);
        console.log(searchTicker);
        document.getElementById("search-value").value = "";
    }

    function searchFilterLists() {
        setSearchFilter(document.getElementById("search-filter").value);
    }

    useEffect(() => {
        setSearchResult(null);
        setTimeout(() => {
            console.log("Heeft gezocht");
            console.log(searchResult);
            setSearchResult(
                <DisplayPuzzles search={searchFilter} value={searchValue}/>
            );
        });
    }, [searchTicker]);

    return (
        <>
            <PageHeader title="zoek puzzels"/>
            <div className="pageContainer">
                <div className="pageContent">
                    <LoginHeader/>
                    <div className="searchContainer">
                        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                            <label>Zoekfilter</label>
                            <select
                                className="inputField"
                                id="search-filter"
                                name="searchFilter"
                                onClick={searchFilterLists}
                                {...register("searchFilter")}>
                                <option selected="selected">Kies filter</option>
                                <option value="all">Alle puzzels</option>
                                <option value="tags">Categorie</option>
                                <option value="pieces">Aantal Puzzelstukjes</option>
                                <option value="brands">Merk</option>
                            </select>
                            <input
                                type="text"
                                list={searchFilter}
                                className="inputField"
                                id="search-value"
                                name="searchValue"
                                defaultValue=""
                                {...register("searchValue")}
                            />
                            <DataListBrands/>
                            <DataListNumberOfPieces/>
                            <DataListTags/>
                            <button type="submit" className="regularButton">zoek</button>
                        </form>
                    </div>
                    <div className="searchResults">
                        <h3>zoekresultaten</h3>
                        {searchResult}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage;