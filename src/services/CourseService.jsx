class CourseService {
    _apiBase = 'http://localhost:5259/api/';

    getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return JSON.parse(tokenString);
    }

    getResource = async (url) => {
        let res = await fetch(url, {
            metthod: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.getToken()
            }
        });
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    saveCourse = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            },
            body: JSON.stringify(data)
        };

        let res = await fetch(this._apiBase + 'course/create', requestOptions);

        if (!res.ok) {
            throw new Error(`status: ${res.status}`);
        }
        
        return await res.json();
    }

    getCourseById = async (id) => {
        const res = await this.getResource(this._apiBase + `course/${id}`);
        return res;
    }

    getTeacherCourses = async () => {
        const res = await this.getResource(this._apiBase + `course/teacherCourses`);
        return res;
    }


}

export default CourseService;