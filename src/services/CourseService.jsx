import {useHttp} from '../hooks/http.hook';

const useCourseService = () => {

    const {request, error, clearError} = useHttp();
    const _apiBase = 'http://localhost:5259/api/';

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return JSON.parse(tokenString);
    }

    const loginUser = async(credentials) => {
        const url = `${_apiBase}auth/login`
        return await request(url, 'POST', JSON.stringify(credentials), {'Content-Type': 'application/json'});
    }

    const registerUser = async(credentials) => {
        const url = `${_apiBase}auth/register`
        return await request(url, 'POST', JSON.stringify(credentials), {'Content-Type': 'application/json'});
    }

    // const getResource = async (url) => {
    //     let res = await fetch(url, {
    //         metthod: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + this.getToken()
    //         }
    //     });
    
    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //      
    //     return await res.json();
    // }

    const getResource = async(url) => {
        return await request(url, 'GET', null, {'Authorization': 'Bearer ' + getToken()});
    }

    // const saveCourse = async (data) => {
    //     const requestOptions = {method: 'POST',
    //         headers: {'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.getToken()},
    //         body: JSON.stringify(data)
    //     };

    //     let res = await fetch(this._apiBase + 'course/create', requestOptions);

    //     if (!res.ok) {
    //         throw new Error(`status: ${res.status}`);
    //     }
        
    //     return await res.json();
    // }

    const saveCourse = async(data) => {
        const url = `${_apiBase}course/create`;
        return await request(url, 'POST', JSON.stringify(data), {'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()})
    }

    // const saveModule = async (data, courseId) => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.getToken()
    //         },
    //         body: JSON.stringify(data)
    //     };

    //     let res = await fetch(this._apiBase + `course/${courseId}/addModule`, requestOptions);

    //     if (!res.ok) {
    //         throw new Error(`status: ${res.status}`);
    //     }
        
    //     return await res.json();
    // }

    const saveModule = async (data, courseId) => {
        const url = `${_apiBase}course/${courseId}/addModule`;
        return await request(url, 'POST', JSON.stringify(data), { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        })
    }

    // const saveLesson = async (data, moduleId) => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.getToken()
    //         },
    //         body: JSON.stringify(data)
    //     };

    //     let res = await fetch(this._apiBase + `course/module/${moduleId}/addLesson`, requestOptions);

    //     if (!res.ok) {
    //         throw new Error(`status: ${res.status}`);
    //     }
        
    //     return await res.json();
    // }

    const saveLesson = async (data, moduleId) => {
        const url = `${_apiBase}course/module/${moduleId}/addLesson`;
        return await request(url, 'POST', JSON.stringify(data), { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        })
    }

    // const saveTask = async (data, lessonId) => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.getToken()
    //         },
    //         body: JSON.stringify(data)
    //     };

    //     let res = await fetch(this._apiBase + `course/lesson/${lessonId}/addTask`, requestOptions);

    //     if (!res.ok) {
    //         throw new Error(`status: ${res.status}`);
    //     }
        
    //     return await res.json();
    // }

    const saveTask = async (data, lessonId) => {
        const url = `${_apiBase}course/lesson/${lessonId}/addTask`;
        return await request(url, 'POST', JSON.stringify(data), { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        })
    }

    // const enrollCourse = async (courseId) => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.getToken()
    //         },
    //     };

    //     let res = await fetch(this._apiBase + `course/enroll/${courseId}`, requestOptions);

    //     if (!res.ok) {
    //         throw new Error(`status: ${res.status}`);
    //     }
        
    //     return await res.json();
    // }

    const enrollCourse = async (courseId) => {
        const url = `${_apiBase}course/enroll/${courseId}`;
        return await request(url, 'POST', null, { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        })
    }

    // const makeAttempt = async (data, taskId) => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + this.getToken()
    //         },
    //         body: JSON.stringify(data)
    //     };

    //     let res = await fetch(this._apiBase + `course/task/${taskId}/makeAttempt`, requestOptions);

    //     if (!res.ok) {
    //         throw new Error(`status: ${res.status}`);
    //     }
        
    //     return await res.json();
    // }

    const makeAttempt = async (data, taskId) => {
        const url = `${_apiBase}course/task/${taskId}/makeAttempt`;
        return await request(url, 'POST', JSON.stringify(data), { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        })
    }

    const getCourseById = async (id) => {
        const res = await getResource(_apiBase + `course/${id}`);
        console.log(res);
        return res;
    }

    const getLessonById = async (id) => {
        const res = await getResource(_apiBase + `lesson/${id}`);
        return res;
    }

    const getTeacherCourses = async () => {
        const res = await getResource(_apiBase + `course/teacherCourses`);
        return res;
    }

    const getFirstLessonByCourse = async (courseId) => {
        const res = await getResource(_apiBase + `lesson/firstLesson/${courseId}`);
        return res;
    }

    const getPopularCourses = async () => {
        const res = await getResource(_apiBase + `course/popularCourses/`);
        return res;
    }

    const getTasksByLesson = async (lessonId) => {
        const res = await getResource(_apiBase + `student/${lessonId}/tasks`);
        return res;
    }

    const getFirstTaskByLesson = async (lessonId) => {
        const res = await getResource(_apiBase + `task/firstLessonTsk/${lessonId}`);
        return res;
    }

    const getTaskById = async (taskId) => {
        const res = await getResource(_apiBase + `task/${taskId}`);
        return res;
    }

    const getRatingStudentsByCourse = async (courseId) => {
        const res = await getResource(_apiBase + `course/ratingStudents/${courseId}`);
        return res;
    }

    return {error,
        clearError, 
        getToken, 
        loginUser, 
        registerUser,
        getResource,
        saveCourse,
        saveLesson,
        saveModule,
        saveTask,
        enrollCourse,
        makeAttempt,
        getCourseById,
        getLessonById,
        getTeacherCourses,
        getFirstLessonByCourse,
        getPopularCourses,
        getTasksByLesson,
        getFirstTaskByLesson,
        getTaskById,
        getRatingStudentsByCourse
    }
}

export default useCourseService;