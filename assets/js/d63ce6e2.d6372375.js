"use strict";(self.webpackChunkbok=self.webpackChunkbok||[]).push([[254],{4912:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var i=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],a={sidebar_position:2},d="Instrumented Unit Test Setup",u={unversionedId:"android-test/instrumented-unit-test-setup",id:"android-test/instrumented-unit-test-setup",isDocsHomePage:!1,title:"Instrumented Unit Test Setup",description:"For instrumental unit tests you just need these dependencies and configurations:",source:"@site/docs/android-test/instrumented-unit-test-setup.md",sourceDirName:"android-test",slug:"/android-test/instrumented-unit-test-setup",permalink:"/quickcodebok/docs/android-test/instrumented-unit-test-setup",editUrl:"https://github.com/Artenes/quickcodebok/edit/main/website/docs/android-test/instrumented-unit-test-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Unit Test Setup",permalink:"/quickcodebok/docs/android-test/unit-test-setup"},next:{title:"General",permalink:"/quickcodebok/docs/node-model/general"}},p=[],c={toc:p};function l(t){var e=t.components,n=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"instrumented-unit-test-setup"},"Instrumented Unit Test Setup"),(0,s.kt)("p",null,"For instrumental unit tests you just need these dependencies and configurations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-groovy"},"android {\n    // Optional -- Libraries from SDK to test content providers with ProviderTestCase2\n    useLibrary 'android.test.runner'\n    useLibrary 'android.test.base'\n    useLibrary 'android.test.mock'      \n\n    defaultConfig {\n        // Required -- name of class that will run tests\n        testInstrumentationRunner \"androidx.test.runner.AndroidJUnitRunner\"\n    }\n}\n\ndependencies {\n    // Required -- to test activities with ActivityScenario and ApplicationProvider\n    androidTestImplementation 'androidx.test:core:1.4.0'\n    // Required -- Runner that will get test apk and run against device\n    androidTestImplementation 'androidx.test:runner:1.4.0'\n    // Optional -- to test services with ServiceTestRule\n    androidTestImplementation 'androidx.test:rules:1.4.0'\n}\n")),(0,s.kt)("p",null,"Create this folder structure for instrumentation unit tests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/app/src/androidTest/java/\n")),(0,s.kt)("p",null,"Sample instrumented unit test file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.testapp;\n\nimport android.content.Context;\n\nimport androidx.test.core.app.ActivityScenario;\nimport androidx.test.core.app.ApplicationProvider;\n\nimport org.junit.Test;\n\nimport static org.junit.Assert.*;\n\npublic class ExampleInstrumentedTest {\n    @Test\n    public void useAppContext() {\n        Context appContext = ApplicationProvider.getApplicationContext();\n        assertEquals("com.example.multimodulesampleapp", appContext.getPackageName());\n    }\n}\n')),(0,s.kt)("h1",{id:"reference"},"Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Android Developers: ",(0,s.kt)("a",{parentName:"li",href:"https://developer.android.com/training/testing/unit-testing/instrumented-unit-tests"},"Build Instrumented Unit Tests")),(0,s.kt)("li",{parentName:"ul"},"Android Developers: ",(0,s.kt)("a",{parentName:"li",href:"https://developer.android.com/training/testing/integration-testing/service-testing"},"Test Your Service")),(0,s.kt)("li",{parentName:"ul"},"Android Develoeprs: ",(0,s.kt)("a",{parentName:"li",href:"https://developer.android.com/reference/androidx/test/core/app/ActivityScenario"},"ActivityScenario"))))}l.isMDXComponent=!0}}]);