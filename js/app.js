// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// import { getDatabase, ref, push, set, update, onChildAdded, remove, onChildRemoved }
//     from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD_xC9EWLjBaooDsBOj3KPMhIqoffTc7Wc",
//     authDomain: "kakeibo2-3a6cd.firebaseapp.com",
//     projectId: "kakeibo2-3a6cd",
//     storageBucket: "kakeibo2-3a6cd.appspot.com",
//     messagingSenderId: "872262479811",
//     appId: "1:872262479811:web:9a9e916a7ea0a1588b9776"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Firestoreの参照
// const db = firebase.firestore();

// // フォームの送信イベントリスナー
// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const date = form.elements["date"].value;
//     const item = form.elements["item"].value;
//     const amount = form.elements["amount"].value;

//     // Firestoreにデータを追加
//     db.collection("expenses").add({
//         date: date,
//         item: item,
//         amount: amount
//     })
//         .then(function (docRef) {
//             console.log("Document written with ID: ", docRef.id);
//             displayExpenses(); // データを再表示する
//             form.reset(); // フォームをリセットする
//         })
//         .catch(function (error) {
//             console.error("Error adding document: ", error);
//         });
// });

// // 家計簿のデータをFirestoreから読み込む関数
// function displayExpenses() {
//     const expensesList = document.getElementById('expenses-list');

//     // データをクリアする
//     expensesList.innerHTML = '';

//     // Firestoreからデータを取得して表示する
//     db.collection("expenses").get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             const expense = doc.data();
//             const expenseItem = document.createElement('div');
//             expenseItem.textContent = `${expense.date}: ${expense.item} - ${expense.amount}円`;
//             expensesList.appendChild(expenseItem);
//         });
//     });
// }



