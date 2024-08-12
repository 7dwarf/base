gclient_gn_args_file = 'build/config/gclient_args.gni'
gclient_gn_args = [
  'build_with_chromium',
  'generate_location_tags',
]

vars = {
  # Variable that can be used to support multiple build scenarios, like having
  # Chromium specific targets in a client project's GN file or sync dependencies
  # conditionally etc.
  'build_with_chromium': True,

  # Generate location tag metadata to include in tests result data uploaded
  # to ResultDB. This isn't needed on some configs and the tool that generates
  # the data may not run on them, so we make it possible for this to be
  # turned off. Note that you also generate the metadata but not include it
  # via a GN build arg (tests_have_location_tags).
  'generate_location_tags': True,

  # By default, don't check out android. Will be overridden by gclient
  # variables.
  # TODO(ehmaldonado): Remove this once the bug in gclient is fixed.
  'checkout_android': False,
  # This can be overridden, e.g. with custom_vars, to build clang from HEAD
  # instead of downloading the prebuilt pinned revision.
  'llvm_force_head_revision': False,
  
  'android_git': 'https://android.googlesource.com',
  'boringssl_git': 'https://boringssl.googlesource.com',
  'chromium_git': 'https://chromium.googlesource.com',
  
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling BoringSSL
  # and whatever else without interference from each other.
  #
  # Note this revision should be updated with
  # third_party/boringssl/roll_boringssl.py, not roll-dep.
  'boringssl_revision': '74646566e93de7551bfdfc5f49de7462f13d1d05',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling freetype
  # and whatever else without interference from each other.
  'freetype_revision': '4d8db130ea4342317581bab65fc96365ce806b77',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling googletest
  # and whatever else without interference from each other.
  'googletest_revision': 'af29db7ec28d6df1c7f0f745186884091e602e07',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling HarfBuzz
  # and whatever else without interference from each other.
  'harfbuzz_revision': '2822b589bc837fae6f66233e2cf2eef0f6ce8470',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling lss
  # and whatever else without interference from each other.
  'lss_revision': 'ce877209e11aa69dcfffbd53ef90ea1d07136521',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling catapult
  # and whatever else without interference from each other.
  'catapult_revision': 'fb540cd80e69889f9d241a5b1946d9147c3f6c20',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling feed
  # and whatever else without interference from each other.
  'libcxxabi_revision':    '9643f2cf13d6935a84a30b7da7de53327733e190',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling feed
  # and whatever else without interference from each other.
  'libunwind_revision':    '29a6dda8c6588ba4abeafdb21be531e757983e31',
  # Three lines of non-changing comments so that
  # the commit queue can handle CLs rolling feed
  # and whatever else without interference from each other.
  'clang_format_revision':    'f97059df7f8b205064625cdb5f97b56668a125ef',
  # If you change this, also update the libc++ revision in
  # //buildtools/deps_revisions.gni.
  'libcxx_revision':       '5622befaf8a9d539bc94c9f1341b8e76065334db',

  # GN CIPD package version.
  'gn_version': 'git_revision:41fef642de70ecdcaaa26be96d56a0398f95abd4',

  # ninja CIPD package version.
  # https://chrome-infra-packages.appspot.com/p/infra/3pp/tools/ninja
  # This has to stay in sync with the version in third_party/ninja/README.chromium.
  'ninja_version': 'version:2@1.11.1.chromium.6',
}

deps = {
  'buildtools/clang_format/script':
    Var('chromium_git') +
    '/external/github.com/llvm/llvm-project/clang/tools/clang-format.git@' +
    Var('clang_format_revision'),
  'buildtools/linux64': {
    'packages': [
      {
        'package': 'gn/gn/linux-${{arch}}',
        'version': Var('gn_version'),
      }
    ],
    'dep_type': 'cipd',
    'condition': 'host_os == "linux"',
  },
  'buildtools/mac': {
    'packages': [
      {
        'package': 'gn/gn/mac-${{arch}}',
        'version': Var('gn_version'),
      }
    ],
    'dep_type': 'cipd',
    'condition': 'host_os == "mac"',
  },
  'buildtools/win': {
    'packages': [
      {
        'package': 'gn/gn/windows-amd64',
        'version': Var('gn_version'),
      }
    ],
    'dep_type': 'cipd',
    'condition': 'host_os == "win"',
  },
  'buildtools/third_party/libc++/trunk':
    Var('chromium_git') +
    '/external/github.com/llvm/llvm-project/libcxx.git' + '@' +
    Var('libcxx_revision'),
  'buildtools/third_party/libc++abi/trunk':
    Var('chromium_git') +
    '/external/github.com/llvm/llvm-project/libcxxabi.git' + '@' +
    Var('libcxxabi_revision'),
  'buildtools/third_party/libunwind/trunk':
    Var('chromium_git') +
    '/external/github.com/llvm/llvm-project/libunwind.git' + '@' +
    Var('libunwind_revision'),
  'third_party/libjpeg_turbo':
    Var('chromium_git') + '/chromium/deps/libjpeg_turbo.git' + '@' + 'aa4075f116e4312537d0d3e9dbd5e31096539f94',
  'third_party/catapult':
    Var('chromium_git') + '/catapult.git' + '@' + Var('catapult_revision'),
  'third_party/lss': {
    'url': Var('chromium_git') + '/linux-syscall-support.git' + '@' + Var('lss_revision'),
    'condition': 'checkout_android or checkout_linux',
  },
  'third_party/perfetto':
    Var('android_git') + '/platform/external/perfetto.git' + '@' + 'bfdb3fc5cc0fc2ea9324caef920ceb30c1e3d9f5',
  'third_party/sqlite/src':
    Var('chromium_git') + '/chromium/deps/sqlite.git' + '@' + 'f6752b7ed1fe3cc1491c0c47ec5804ee2bd0e59b',
  'third_party/harfbuzz-ng/src':
    Var('chromium_git') + '/external/github.com/harfbuzz/harfbuzz.git' + '@' + Var('harfbuzz_revision'),
  'third_party/googletest/src':
    Var('chromium_git') + '/external/github.com/google/googletest.git' + '@' + Var('googletest_revision'),
  'third_party/jsoncpp/source':
    Var('chromium_git') + '/external/github.com/open-source-parsers/jsoncpp.git'
      + '@' + '42e892d96e47b1f6e29844cc705e148ec4856448', # release 1.9.4
  'third_party/nasm': {
    'url': Var('chromium_git') + '/chromium/deps/nasm.git' + '@' +
    '7fc833e889d1afda72c06220e5bed8fb43b2e5ce'
  },
  'third_party/icu':
    Var('chromium_git') + '/chromium/deps/icu.git' + '@' + 'e3b6a4c334b9cdbe2d54476c7ac4eb98900d1144',
  'third_party/boringssl/src':
    Var('boringssl_git') + '/boringssl.git' + '@' +  Var('boringssl_revision'),
  'third_party/freetype/src':
    Var('chromium_git') + '/chromium/third_party/freetype2.git' + '@' + Var('freetype_revision'),
  'third_party/ced/src':
    Var('chromium_git') + '/external/github.com/google/compact_enc_det.git' + '@' + 'ba412eaaacd3186085babcd901679a48863c7dd5',
  # Used for embedded builds. CrOS & Linux use the system version.
  'third_party/fontconfig/src': {
      'url': Var('chromium_git') + '/external/fontconfig.git' + '@' + '06929a556fdc39c8fe12965b69070c8df520a33e',
      'condition': 'checkout_linux',
  },
  'tools/page_cycler/acid3':
    Var('chromium_git') + '/chromium/deps/acid3.git' + '@' + '6be0a66a1ebd7ebc5abc1b2f405a945f6d871521',
  'third_party/depot_tools':
    Var('chromium_git') + '/chromium/tools/depot_tools.git' + '@' + 'aa3d37f8c29c170566c26a2eedeefb96c62b9dd3',
}

hooks = [
  {
    # Update the Windows toolchain if necessary.  Must run before 'clang' below.
    'name': 'win_toolchain',
    'pattern': '.',
    'condition': 'checkout_win',
    'action': ['python3', 'build/vs_toolchain.py', 'update', '--force'],
  },
  {
    # Update the Mac toolchain if necessary.
    'name': 'mac_toolchain',
    'pattern': '.',
    'condition': 'checkout_mac or checkout_ios',
    'action': ['python3', 'build/mac_toolchain.py'],
  },
  {
    # Update the prebuilt clang toolchain.
    # Note: On Win, this should run after win_toolchain, as it may use it.
    'name': 'clang',
    'pattern': '.',
    'condition': 'not llvm_force_head_revision',
    'action': ['python3', 'tools/clang/scripts/update.py'],
  },
  {
    'name': 'sysroot_arm',
    'pattern': '.',
    'condition': 'checkout_linux and checkout_arm',
    'action': ['python3', 'build/linux/sysroot_scripts/install-sysroot.py',
               '--arch=arm'],
  },
  {
    'name': 'sysroot_arm64',
    'pattern': '.',
    'condition': 'checkout_linux and checkout_arm64',
    'action': ['python3', 'build/linux/sysroot_scripts/install-sysroot.py',
               '--arch=arm64'],
  },
  {
    'name': 'sysroot_x86',
    'pattern': '.',
    'condition': 'checkout_linux and (checkout_x86 or checkout_x64)',
    'action': ['python3', 'build/linux/sysroot_scripts/install-sysroot.py',
               '--arch=x86'],
  },
  {
    'name': 'sysroot_mips',
    'pattern': '.',
    'condition': 'checkout_linux and checkout_mips',
    'action': ['python3', 'build/linux/sysroot_scripts/install-sysroot.py',
               '--arch=mips'],
  },
  {
    'name': 'sysroot_mips64',
    'pattern': '.',
    'condition': 'checkout_linux and checkout_mips64',
    'action': ['python3', 'build/linux/sysroot_scripts/install-sysroot.py',
               '--arch=mips64el'],
  },
  {
    'name': 'sysroot_x64',
    'pattern': '.',
    'condition': 'checkout_linux and checkout_x64',
    'action': ['python3', 'build/linux/sysroot_scripts/install-sysroot.py',
               '--arch=x64'],
  },
  {
    'name': 'test_fonts',
    'pattern': '.',
    'action': [ 'python3',
                'third_party/depot_tools/download_from_google_storage.py',
                '--no_resume',
                '--extract',
                '--no_auth',
                '--bucket', 'chromium-fonts',
                '-s', 'third_party/test_fonts/test_fonts.tar.gz.sha1',
    ],
  },
]
