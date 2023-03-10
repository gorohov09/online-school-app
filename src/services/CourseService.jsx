class CourseService {
    _apiBase = 'http://localhost:5259/api/';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    saveCourse = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        let res = await fetch(this._apiBase + 'course/create', requestOptions);

        if (!res.ok) {
            throw new Error(`status: ${res.status}`);
        }
        
        return await res.json();
    }

    


}

export default CourseService;