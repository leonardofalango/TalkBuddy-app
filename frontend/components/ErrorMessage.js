const ErrorMessage = (props) => {
    if (props.errorMessage !== '') {
        return (
            <TouchableOpacity style={globalStyle.errorButton}
                onPress={() => props.setErrorMessage('')}
            >
                <Text>{errorMessage}</Text>
            </TouchableOpacity>
        )
    }
}

export { ErrorMessage };