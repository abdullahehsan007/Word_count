def count_words_and_characters(text):
    words = text.split()  # Splitting text into words
    num_words = len(words)
    num_chars = len(text)  # Counting characters including spaces
    
    print(f"Number of words: {num_words}")
    print(f"Number of characters: {num_chars}")

# Example usage
text = input("Enter a text: ")
count_words_and_characters(text)