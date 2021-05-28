const add = require("../src/simple-tests").add;
const findByName = require("../src/simple-tests").findByName;
const sortByUsername = require("../src/components/functions/SortFunctions").sortByUsername;
const sortByPieces = require("../src/components/functions/SortFunctions").sortByPieces;
const sortByTitle = require("../src/components/functions/SortFunctions").sortByTitle;

test("Add() function should return sum of 2 numbers", () => {

    const num1 = 3;
    const num2 = 8;

    const sum = add(num1, num2);

    expect(sum).toBe(11);
});

test("findByName() returns opbject from array with specified name", () => {

    const users = [
        {id: 1, name: "Tim"},
        {id: 2, name: "Henk"},
        {id: 3, name: "Pieter"}
    ];

    const userNameToFind = "Henk";

    const user = findByName(users, userNameToFind);

    expect(user).toEqual({id: 2, name: "Henk"});
});

test("findByName() schould return null if the element isn't found", () => {

    const users = [
        {id: 1, name: "Tim"},
        {id: 2, name: "Henk"},
        {id: 3, name: "Pieter"}
    ];
    const userNameToFind = "Kees";

    const user = findByName(users, userNameToFind);

    expect(user).toBeNull();
});

test("sortByUsername() should return alphabetically sorted array by username", () => {
    const users = [
        {id: 1, username: "tim", firstName: "Tim", lastName: "Bonsen"},
        {id: 2, username: "hans", firstName: "Hans", lastName: "Bonsen"},
        {id: 3, username: "henk", firstName: "Henk", lastName: "Kramer"},
        {id: 4, username: "sonja", firstName: "Sonja", lastName: "Kramer"}
    ];

    const sortedArray = sortByUsername(users);

    expect(sortedArray).toEqual([
        {id: 2, username: "hans", firstName: "Hans", lastName: "Bonsen"},
        {id: 3, username: "henk", firstName: "Henk", lastName: "Kramer"},
        {id: 4, username: "sonja", firstName: "Sonja", lastName: "Kramer"},
        {id: 1, username: "tim", firstName: "Tim", lastName: "Bonsen"}
    ]);
});

test("sortByPieces() should return numerically sorted array by number of pieces", () => {
    const puzzles = [
        {id: 1, title: "Terras", puzzleBrand: "King", numberOfPieces: 500},
        {id: 12, title: "Switzerland", puzzleBrand: "Jumbo", numberOfPieces: 1200},
        {id: 32, title: "Tijdreizen", puzzleBrand: "Castorland", numberOfPieces: 1500},
        {id: 24, title: "Bibliotheek", puzzleBrand: "Jumbo", numberOfPieces: 500}
    ];

    const sortedArray = sortByPieces(puzzles);

    expect(sortedArray).toEqual([
        {id: 1, title: "Terras", puzzleBrand: "King", numberOfPieces: 500},
        {id: 24, title: "Bibliotheek", puzzleBrand: "Jumbo", numberOfPieces: 500},
        {id: 12, title: "Switzerland", puzzleBrand: "Jumbo", numberOfPieces: 1200},
        {id: 32, title: "Tijdreizen", puzzleBrand: "Castorland", numberOfPieces: 1500}
    ]);
});

test("sortByTitle() should return alphabetically sorted array by title", () => {
    const puzzles = [
        {id: 1, title: "Terras", puzzleBrand: "King", numberOfPieces: 500},
        {id: 12, title: "Switzerland", puzzleBrand: "Jumbo", numberOfPieces: 1200},
        {id: 32, title: "Tijdreizen", puzzleBrand: "Castorland", numberOfPieces: 1500},
        {id: 24, title: "Bibliotheek", puzzleBrand: "Jumbo", numberOfPieces: 500}
    ];

    const sortedArray = sortByTitle(puzzles);
    console.log(sortedArray);

    expect(sortedArray).toEqual([
        {id: 24, title: "Bibliotheek", puzzleBrand: "Jumbo", numberOfPieces: 500},
        {id: 12, title: "Switzerland", puzzleBrand: "Jumbo", numberOfPieces: 1200},
        {id: 1, title: "Terras", puzzleBrand: "King", numberOfPieces: 500},
        {id: 32, title: "Tijdreizen", puzzleBrand: "Castorland", numberOfPieces: 1500}
    ]);
});