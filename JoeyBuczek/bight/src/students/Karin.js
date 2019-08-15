<html>
  <LoginPageApp />
</html>;

function App() {
  return (
    <html>
      <App>
        <QuickStore>
          <Router>
            <Navbar />
            <Button>New Round</Button>
            <TargetChoice />
            <Table rows={data}>
              <ConfirmButton />
              <DeleteButton />
            </Table>
            <ScoreRecorder hasOwnState>
              <TargetNumber />
              <Username />
              <PinDropArea />
              <Button>Previous</Button>
              <Button>Next</Button>
              <Button>Record Score</Button>
              <Button>Add Notes</Button>
              <ConfirmButton />
              <FinishButton endOfRound={true} />
            </ScoreRecorder>

            <Button>Previous Round</Button>
            <Table rounds={rounds} />
          </Router>
        </QuickStore>
      </App>
    </html>
  );
}
