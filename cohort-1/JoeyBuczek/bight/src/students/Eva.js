// Can use useReducer or Context to achieve this easily
// Be sure to dispatch actions AFTER the fetch to the database

function CleaningApp() {
  return (
    <div>
      <Store>
        <Header />
        <Navbar>
          <About />
          <Blog />
          <Rates />
          <ContactInfo />
        </Navbar>
        <LoginPage />
        <GetHelpButton />
        <GiveHelpButton />
        <GetHelpPage>
          <Form>
            <Radio />
            <Radio />
            <Radio />
            <YourLocationInfo />
            <ListOfHelpers>
              <Helper />
              <Helper />
              <Helper />
            </ListOfHelpers>
            <Disclaimer />
            <Submit onClick={() => submitForm()} />
          </Form>
        </GetHelpPage>
        <GiveHelpPage>
          <ServicesOffered />
          <Form>
            <Radio />
            <Radio />
            <Radio />
            <Disclaimer />
            <Submit onClick={() => submitForm()} />
          </Form>
        </GiveHelpPage>
      </Store>
    </div>
  );
}
