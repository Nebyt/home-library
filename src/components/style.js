const style = {
  App: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: "'Rubik', sans-serif",
  },
  HomeLibraryMain: {
    maxWidth: "90%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  booksList: {
    backgroundColor: "#ebf0f6",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394b2d8' fill-opacity='0.17'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    border: "1px solid black",
    borderRadius: 10,
    padding: 30,
    margin: 50,
    marginTop: 0,
    display: "inline-block",
  },
  bookRowItem: {
    border: "1px solid #282c34",
    backgroundColor: "#98aebd",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: "650px",
  },
  bookAuthor: {
    marginBottom: 5,
    fontWeight: "bold",
    padding: 5,
    fontSize: "18px"
  },
  bookTitle: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: "20px",
  },
  bookAdditionalInfo: {
    padding: 5,
    color: '#505e69',
  },
  topPanel: {
    backgroundColor: "#d3e0ef",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2368a7f8' fill-opacity='0.19' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
    border: "1px solid black",
    borderRadius: 10,
    fontSize: "20px",
    padding: 30,
    margin: 50,
    marginBottom: 0,
    display: "flex",
    justifyContent: "space-between",
    width: "710px",
  },
};

export default style;