// Can use useReducer or Context to achieve this easily
// Be sure to dispatch actions AFTER the fetch to the database

function TripPlanner() {
  function logic() {
    const stop = calculateNearestStop();
    const closestStopInMiles = calcDistance(stop);
    return geoCoords(closestStopInMiles.coordinates);
  }

  function generateRouteMap() {
    return {
      busInfo: {},
      route: {},
      timeOfArrival: new Date(),
      alertTimeout: () => {}
    };
  }

  return (
    <div>
      <Store>
        <Navbar>
          <LocateStop />
          <PlanATrip>
            <GenerateMapMenuItem>
              <Submit onClick={() => generateRouteMap()} />
            </GenerateMapMenuItem>
            <FromCurrentStopMenuItem>
              <Submit onClick={() => logic()} />
            </FromCurrentStopMenuItem>
          </PlanATrip>
          <Login />
        </Navbar>

        <Form>
          <GetCurrentLocation />
          <Destination />
          <Submit onClick={() => logic()} />
        </Form>

        <Map>
          <MapInfo />
          <Alert />
        </Map>
      </Store>
    </div>
  );
}
