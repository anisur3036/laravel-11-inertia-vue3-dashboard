<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("/");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/accordion', function() {
    return inertia('Accordion');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/settings', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name("settings");


Route::prefix('')->group(function() {
    Route::get("login-app", function () {
        return Inertia::render("Examples/Login");
    })->name("login-app");
    Route::get("login-app-1", function () {
        return Inertia::render("Examples/Login1");
    })->name("login-app-1");
    Route::get("login-app-2", function () {
        return Inertia::render("Examples/Login2");
    })->name("login-app-2");
    Route::get("login-app-3", function () {
        return Inertia::render("Examples/Login3");
    })->name("login-app-3");
    Route::get("register-app", function () {
        return Inertia::render("Examples/Register");
    })->name("register-app");
    Route::get("register-app-1", function () {
        return Inertia::render("Examples/Register1");
    })->name("register-app-1");
    Route::get("register-app-2", function () {
        return Inertia::render("Examples/Register2");
    })->name("register-app-2");
    Route::get("register-app-3", function () {
        return Inertia::render("Examples/Register3");
    })->name("register-app-3");
    Route::get("forgot-password-app", function () {
        return Inertia::render("Examples/ForgotPassword");
    })->name("forgot-password-app");
    Route::get("forgot-password-app-1", function () {
        return Inertia::render("Examples/ForgotPassword1");
    })->name("forgot-password-app-1");
    Route::get("forgot-password-app-2", function () {
        return Inertia::render("Examples/ForgotPassword2");
    })->name("forgot-password-app-2");
    Route::get("forgot-password-app-3", function () {
        return Inertia::render("Examples/ForgotPassword3");
    })->name("forgot-password-app-3");
    Route::get("lock-app", function () {
        return Inertia::render("Examples/Lock");
    })->name("lock-app");
    Route::get("lock-app-1", function () {
        return Inertia::render("Examples/Lock1");
    })->name("lock-app-1");
    Route::get("lock-app-2", function () {
        return Inertia::render("Examples/Lock2");
    })->name("lock-app-2");
    Route::get("lock-app-3", function () {
        return Inertia::render("Examples/Lock3");
    })->name("lock-app-3");
    Route::get("profile", function () {
        return Inertia::render("Examples/Profile");
    })->name("profile");
    Route::get("pricing", function () {
        return Inertia::render("Examples/Pricing");
    })->name("pricing");
    Route::get("project-management-app", function () {
        return Inertia::render("Examples/ProjectApp");
    })->name("project-management-app");
    Route::get("todo-app", function () {
        return Inertia::render("Examples/TodoApp");
    })->name("todo-app");
    Route::get("email-app", function () {
        return Inertia::render("Examples/EmailApp");
    })->name("email-app");
    Route::get("chat-app", function () {
        return Inertia::render("Examples/ChatApp");
    })->name("chat-app");
    //Component Pages
    Route::get("alert", function () {
        return Inertia::render("Samples/Alert");
    })->name("alert");
    Route::get("avatar", function () {
        return Inertia::render("Samples/Avatar");
    })->name("avatar");
    Route::get("badge", function () {
        return Inertia::render("Samples/Badge");
    })->name("badge");
    Route::get("breadcrumb", function () {
        return Inertia::render("Samples/Breadcrumb");
    })->name("breadcrumb");
    Route::get("button", function () {
        return Inertia::render("Samples/Button");
    })->name("button");
    Route::get("chart", function () {
        return Inertia::render("Samples/Chart");
    })->name("chart");
    Route::get("collapsible", function () {
        return Inertia::render("Samples/Collapsible");
    })->name("collapsible");
    Route::get("content-box", function () {
        return Inertia::render("Samples/ontentBox");
    })->name("content-box");
    Route::get("dropdown", function () {
        return Inertia::render("Samples/Dropdown");
    })->name("dropdown");
    Route::get("list", function () {
        return Inertia::render("Samples/List");
    })->name("list");
    Route::get("loading", function () {
        return Inertia::render("Samples/Loading");
    })->name("loading");
    Route::get("modal", function () {
        return Inertia::render("Samples/Modal");
    })->name("modal");
    Route::get("pagination", function () {
        return Inertia::render("Samples/Paginate");
    })->name("pagination");
    Route::get("progress", function () {
        return Inertia::render("Samples/Progress");
    })->name("progress");
    Route::get("tab", function () {
        return Inertia::render("Samples/Tab");
    })->name("tab");
    Route::get("table", function () {
        return Inertia::render("Samples/Table", [
            "users" => \App\Models\User::all(),
        ]);
    })->name("table");
    Route::match(["get", "post"], "back-end-table", [
        \App\Http\Controllers\DemoContentController::class,
        "index",
    ])->name("back-end-table");

    Route::resource("product", \App\Http\Controllers\DemoContentController::class);
    Route::post("product", [\App\Http\Controllers\DemoContentController::class, "index"])->name("product.search");

    /*TODO: Toastr Feature
     Route::get('toastr',function (){return Inertia::render('Samples/Components/Toastr');})->name('toastr');*/
    Route::get("tooltip", function () {
        return Inertia::render("Samples/Tooltip");
    })->name("tooltip");
    // Layout Pages
    Route::get("layout-structure", function () {
        return Inertia::render("Samples/LayoutStructure");
    })->name("layout-structure");
    Route::get("layout-grid", function () {
        return Inertia::render("Samples/Grid");
    })->name("layout-grid");
    Route::get("layout-statistic-widget", function () {
        return Inertia::render("Samples/StatisticWidget");
    })->name("layout-statistic-widget");
    Route::get("test", function () {
        return Inertia::render("Samples/Test");
    })->name("test");
    // Form Pages
    Route::get("form-structure", function () {
        return Inertia::render("Samples/FormStructure");
    })->name("form-structure");
    Route::get("form-input-group", function () {
        return Inertia::render("Samples/InputGroup");
    })->name("form-input-group");
    Route::get("form-simple-field", function () {
        return Inertia::render("Samples/SimpleField");
    })->name("form-simple-field");
    Route::get("form-repeatable-field", function () {
        return Inertia::render("Samples/RepeatableField");
    })->name("form-repeatable-field");
    Route::get("form-date-field", function () {
        return Inertia::render("Samples/DateField");
    })->name("form-date-field");
    Route::get("form-select-input", function () {
        return Inertia::render("Samples/SelectInput", [
            "users" => \App\Models\User::all(),
        ]);
    })->name("form-select-input");
    Route::get("form-tag-input", function () {
        return Inertia::render("Samples/TagInput");
    })->name("form-tag-input");
    Route::get("form-validation", function () {
        return Inertia::render("Samples/Validation");
    })->name("form-validation");
});
