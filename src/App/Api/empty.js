import {useState} from "react";

const [selectedFile, setSelectedFile] = useState();
const [isSelected, setIsSelected] = useState(false);


const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
};

const handleSubmission = () => {
    const formData = new FormData();

    formData.append('file', selectedFile);
    console.log(selectedFile)

    fetch(
        'http://localhost:8080/api/v1/devices/images',
        {
            method: 'POST',
            body: formData,
        }
    )
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


const upload =
    (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    )