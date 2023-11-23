import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const MySearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
    );
};

export { MySearchBar }