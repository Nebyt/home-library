const style = {
  App: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: "'Rubik', sans-serif",
  },
  form: {
    margin: 50,
    padding: 10,
    width: 310,
    border: "1px solid black",
    backgroundColor: "black",
    color: "white"
  },
  booksList: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: 10,
    padding: 30,
    margin: 50
  },
  bookRowItem: {
    border: "1px solid #282c34",
    backgroundColor: "#98aebd",
    borderRadius: 30,
    padding: 20,
    margin: 10,
    width: "650px",
  },
  bookAuthor: {
    padding: 5,
  },
  bookTitle: {
    padding: 5,
  },
  bookAdditionalInfo: {
    padding: 5,
    color: '#505e69',
  },
  topPanel: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "space-between",
  },
};

export default style;