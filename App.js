import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SongQueue = styled.View
  'margin-top: 20px;';

const PAGE = 20;

class QueuedUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      offset: 0,
      query: "",
      isFetching: false,
      isEmpty: false,
      spotify_tokens: null,
      isTokenFetching: false,
    };
  }

  handleSearchChange(text) {
    this.setState(
      {
        isEmpty: false,
        query: text,
        offset: 0,
        songs: []
      },
      () => {
        this.loadNextPage();
      }
    );
  }

  render() {
    const{ query } = this.state;

    return (
      <Container>
        <SafeAreaView>
          <Header>
            <title>
              "Music"
            </title>
          </Header>
          <SearchBar>
            onChange = { text => this.handleSearchCange(text) }
            text = { query }
          </SearchBar>
          <SongQueue>

          </SongQueue>
        </SafeAreaView>
      </Container>
    );
  }
}

export default QueuedUp;

